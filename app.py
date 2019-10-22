from flask import Flask, render_template, flash, request
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField

# App config.
DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

class QuizGenerator(Form):
    topic = TextField('Topic:', validators=[validators.required()])
    article = TextField('Article:', validators=[validators.required()])
    
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
        else:
            print('Error: All the form fields are required. ')
            flash('Error: All the form fields are required. ')
    
        return render_template('form.html', form=form)

if __name__ == "__main__":
    app.run()