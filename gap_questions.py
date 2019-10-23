import nltk
nltk.download('averaged_perceptron_tagger')

def create_gap_questions(sent):
    tokenized = nltk.word_tokenize(sent)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if(pos[:2] == 'NN')]
    print (nouns)
    temp_gap_questions = []
    for noun in nouns:
        temp_sent = sent.replace(noun, "______")
        temp_gap_questions.append(temp_sent)

    return temp_gap_questions
