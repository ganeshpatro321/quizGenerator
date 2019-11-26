import nltk
nltk.download('averaged_perceptron_tagger')

def create_gap_questions(sentence):
    tokenized = nltk.word_tokenize(sentence)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if(pos[:2] == 'NN')]
    print (nouns)
    temp_gap_questions = []
    for noun in nouns:
        temp_sent = sentence.replace(noun, "______")
        temp_gap_questions.append(temp_sent)

    return temp_gap_questions
