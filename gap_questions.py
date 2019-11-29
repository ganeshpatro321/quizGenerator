import nltk
# import textblob
import random
nltk.download('averaged_perceptron_tagger')

from textblob import TextBlob
from textblob.np_extractors import ConllExtractor
extractor = ConllExtractor()

def capitalize(word):
    return word.capitalize()

def capitalizePhrase(phrase):
    return ' '.join(list(map(capitalize, phrase.split(' '))))    


def create_gap_questions(sentence):
    blob = TextBlob(sentence, np_extractor=extractor)
    # print(blob.noun_phrases)
    
    length = len(blob.noun_phrases)
    if(length==0):
        return
    important_word = random.choice(blob.noun_phrases)
    dict = {}

    if sentence.find(important_word) != -1:
        dict['question'] = sentence.replace(important_word, '__________')
        dict['answer'] = important_word
        temp_gap_question_answer = dict
    elif sentence.find(important_word.upper()) != -1:
        dict['question'] = sentence.replace(important_word.upper(), '__________')
        dict['answer'] = important_word.upper()
        temp_gap_question_answer = dict
    elif sentence.find(important_word.capitalize()) != -1:
        dict['question'] = sentence.replace(important_word.capitalize(), '__________')
        dict['answer'] = important_word.capitalize()
        temp_gap_question_answer = dict
    else:
        dict['question'] = sentence.replace(capitalizePhrase(important_word), '__________')
        dict['answer'] = capitalizePhrase(important_word)
        temp_gap_question_answer = dict

    # print(temp_gap_questions)
    return temp_gap_question_answer
