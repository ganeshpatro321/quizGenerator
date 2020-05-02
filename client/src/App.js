import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import './App.css';
import { ShowQuestionAnswer, ShowQuestion } from './QuestionAnswer'
import { Summary } from './Summary'

export default class App extends React.Component{
  state = {
    article: '',
    gapqna: [],
    shortques: [],
    mcqqna: [],
    summary: '',
    showSummary: false,
    showGapQuestions: false,
    showShortQuestions: false,
    showMcqQuestions: false,
    loadingMcqQuestion: false,
    loadingGapQuestion: false,
    loadingShortQuestion: false,
    loadingSummary: false
  }


  async handleGapQuestionGeneration() {
    this.setState({loadingGapQuestion: true})
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/generateGapQuestions',
      data: {
        article: this.state.article
      }
    });
    this.setState({gapqna: response.data, showGapQuestions: true, loadingGapQuestion: false})
  }

  async handleShortQuestionGeneration() {
    this.setState({loadingShortQuestion: true})
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/generateShortQuestions',
      data: {
        article: this.state.article
      }
    });
    this.setState({shortques: response.data, showShortQuestions: true, loadingShortQuestion: false})
  }

  async handleMcqQUestionGeneration() {
    this.setState({loadingMcqQuestion: true});
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/generateMcqQuestions',
      data: {
        article: this.state.article
      }
    });
    this.setState({mcqqna: response.data, showMcqQuestions: true, loadingMcqQuestion: false});
  }

  async handleSummaryGeneration() {
    this.setState({loadingSummary: true})
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/summary',
      data: {
        article: this.state.article
      }
    });
    this.setState({summary: response.data, showSummary: !this.state.showSummary, loadingSummary: false})
  }

  render() {
    let loadingSummary = this.state.loadingSummary;
    let loadingGapQuestion = this.state.loadingGapQuestion;
    let loadingShortQuestion = this.state.loadingShortQuestion;
    return (
      <div className="App">
        <header>
          <h2 style={{paddingTop: "20px"}}>Quiz-Gen</h2>
          <Form style={{paddingBottom: '20px'}}>
            <Form.Field>
              <TextArea 
                onChange={(e) => this.setState({article: e.target.value})} 
                placeholder='Paste the article here!' rows={8}
                style={{width: "75%"}}
              />
            </Form.Field>
            <Form.Field inline>
              <Button primary onClick={() => this.handleSummaryGeneration()}>
                {loadingSummary ? 'Loading..' : 'Generate Summary'}
              </Button>
              <Button primary onClick={() => this.handleGapQuestionGeneration()}>
                {loadingGapQuestion ? 'Loading..' : 'Generate Gap Questions'}
              </Button>
              <Button primary onClick={() => this.handleShortQuestionGeneration()}>
                {loadingShortQuestion ? 'Loading..' : 'Generate Short Questions'}
              </Button>
            </Form.Field>
          </Form>
          <br />
          <br />
          {this.state.showSummary && <Summary summary={this.state.summary} />}
          {this.state.showGapQuestions && 
            <div>
              <h4>Gap Questions</h4>
              {this.state.gapqna.map((quesans) => 
                <ShowQuestionAnswer question={quesans.question} answer={quesans.answer} />
              )}
            </div>}
            {this.state.showShortQuestions && 
            <div>
              <h4>Short Questions</h4>
              {this.state.shortques.map((ques) => 
                <ShowQuestion question={ques} />
              )}
            </div>}
        </header>
      </div>
    );
  }
}
