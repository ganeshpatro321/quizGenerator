import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import './App.css';
import { QuestionAnswer } from './QuestionAnswer'
import { Summary } from './Summary'

export default class App extends React.Component{
  state = {
    article: '',
    qna: [],
    summary: '',
    showSummary: false,
    showQuestions: false
  }

  async handleQuestionGeneration() {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000',
      data: {
        article: this.state.article
      }
    });
    this.setState({qna: response.data, showQuestions: true})
  }

  async handleSummaryGeneration() {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/summary',
      data: {
        article: this.state.article
      }
    });
    this.setState({summary: response.data, showSummary: !this.state.showSummary})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2 style={{paddingTop: "20px"}}>Quiz-Gen</h2>
          <Form style={{paddingBottom: '20px'}}>
            <Form.Field>
              <TextArea 
                onChange={(e) => this.setState({article: e.target.value})} 
                placeholder='Tell us more' rows={8}
                style={{width: "75%"}}
              />
            </Form.Field>
            <Form.Field inline>
              <Button primary onClick={() => this.handleQuestionGeneration()}>
                Generate Questions
              </Button>
              <Button primary onClick={() => this.handleSummaryGeneration()}>
                Generate Summary
              </Button>
            </Form.Field>
          </Form>
          <br />
          <br />
          {this.state.showSummary && <Summary summary={this.state.summary} />}
          {this.state.showQuestions && 
            <div>
              <h4>Questions</h4>
              {this.state.qna.map((quesans) => 
                <QuestionAnswer question={quesans.question} answer={quesans.answer} />
              )}
            </div>}
        </header>
      </div>
    );
  }
}
