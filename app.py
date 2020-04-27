from flask import Flask, render_template, flash, request, jsonify
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
from summarize import summarize
from gap_questions import create_gap_questions
from short_questions import create_short_questions
import json
from flask_cors import CORS

import random
import math

# App config.
DEBUG = True
app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

class QuizGenerator(Form):
    topic = TextField('Topic:')
    article = TextField('Article:', validators=[validators.required(), validators.Length(min=100, message=(u'Must be atleast 100 words length'))])
    
    @app.route("/generateGapQuestions", methods=['POST'])
    def generateGapQuestions():
        data = json.loads(request.data)
        article = data['article']

        summarized_text, summary_sentences = summarize(article)

        gap_questions = []

        for sentence in summary_sentences:
            gap_question = create_gap_questions(sentence)
            if gap_question:
                gap_questions.append(gap_question)

        # print(gap_questions)
        response = jsonify(gap_questions)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    @app.route("/generateShortQuestions", methods=['POST'])
    def generateShortQuestions():
        data = json.loads(request.data)
        article = data['article']

        summarized_text, summary_sentences = summarize(article)

        short_questions = []

        for sentence in summary_sentences:
            short_question = create_short_questions(sentence)
            if short_question:
                short_questions.append(short_question)

        response = jsonify(short_questions)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


    @app.route("/summary", methods=['POST'])
    def generateSummary():
        data = json.loads(request.data)
        article = data['article']

        summarized_text, summary_sentences = summarize(article)

        return (json.dumps(summarized_text), 200)

    @app.route("/check", methods=['POST', 'GET'])
    def checkApp():
        return "working"

if __name__ == "__main__":
    app.run()