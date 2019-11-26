from flask import Flask, render_template, flash, request
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
from summarize import summarize
from gap_questions import create_gap_questions

import random
import math

# App config.
DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

class QuizGenerator(Form):
    topic = TextField('Topic:', validators=[validators.required()])
    article = TextField('Article:', validators=[validators.required(), validators.Length(min=100, message=(u'Must be atleast 100 words length'))])
    
    @app.route("/", methods=['GET', 'POST'])
    def hello():
        form = QuizGenerator(request.form)
    
        print (form.errors)
        if request.method == 'POST':
            print("Request accepted")
            topic=request.form['topic']
            article=request.form['article']
            print (topic)
    
        if form.validate():
        # Save the comment here.
            print('Submitted topic: ' + topic)
            flash('Submitted topic: ' + topic)

            summarized_text, summary_sentences = summarize(article)

            gap_questions = []

            for sentence in summary_sentences:
                temp_gap_questions = []
                temp_gap_questions = create_gap_questions(sentence)
                gap_questions += temp_gap_questions

            # print(gap_questions)
            flash_gap_questions = random.choices(gap_questions, k=math.floor(len(gap_questions)/2))

            print(flash_gap_questions)
            flash('Summary: ' + summarized_text)

            for ques in flash_gap_questions:
                flash('Question: ' + ques)
            
        # else:
        #     # print('Error: All the form fields are required. ')
        #     flash('Error: All the form fields are required. ')

        return render_template('form.html', form=form)

if __name__ == "__main__":
    app.run()