import nltk
import random
nltk.download('wordnet')

from nltk.corpus import wordnet

from gap_questions import create_gap_questions

def create_mcq_questions(sentence):
    gap_question_answer = create_gap_questions(sentence)
    answer = ''
    if gap_question_answer:
        answer = gap_question_answer['answer']
    antonyms = []
    if answer:
        answer_elements = answer.split()
        print(answer_elements[0])
        for syn in wordnet.synsets(answer_elements[0]):
            for lm in syn.lemmas():
                if lm.antonyms():
                    antonyms.append(lm.antonyms()[0].name())
    print(antonyms)