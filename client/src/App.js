import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import './App.css';
import { QuestionAnswer } from './QuestionAnswer'

export default class App extends React.Component{
  state = {
    article: '',
    qna: []
  }

  async handleSubmit() {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000',
      data: {
        article: this.state.article
      }
    });
    this.setState({qna: response.data})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form style={{paddingBottom: '20px'}}>
            <Form.Field>
              <TextArea 
                onChange={(e) => this.setState({article: e.target.value})} 
                placeholder='Tell us more' rows={8}
              />
            </Form.Field>
            <Form.Field>
              <Button primary onClick={() => this.handleSubmit()}>
                Generate Questions
              </Button>
            </Form.Field>
          </Form>
          <br />
          <br />
          {this.state.qna.map((quesans) => 
            <QuestionAnswer question={quesans.question} answer={quesans.answer} />
          )}
        </header>
      </div>
    );
  }
}
