import nltk
# import textblob
import random
nltk.download('averaged_perceptron_tagger')

from textblob import TextBlob
from textblob.np_extractors import ConllExtractor
extractor = ConllExtractor()


def create_gap_questions(sentence):
    blob = TextBlob(sentence, np_extractor=extractor)
    print(blob.noun_phrases)
    
    length = len(blob.noun_phrases)
    if(length==0):
        return
    index = random.randint(0, length-1)
    important_word = blob.noun_phrases[index]
    print(important_word, sentence)

    if sentence.find(important_word) != -1:
        temp_gap_question = sentence.replace(important_word, '__________')
    elif sentence.find(important_word.upper()) != -1:
        temp_gap_question = sentence.replace(important_word.upper(), '__________')
    else:
        temp_gap_question = sentence.replace(important_word.capitalize(), '__________')
    

    # print(temp_gap_questions)
    return temp_gap_question
