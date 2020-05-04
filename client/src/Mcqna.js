import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

export default class Mcqna extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: '',
            options: [],
            validateAns: false
        }
    }

    componentDidMount(){
        const qnawithoptions = this.props.qnawithoptions;
        const options = [qnawithoptions[0].answer, ...qnawithoptions[1]];
        options.sort(() => Math.random() - 0.5);
        console.log(qnawithoptions);
            this.setState({
                question: qnawithoptions[0].question,
                answer: qnawithoptions[0].answer,
                options: options
            })
    }

    checkAnswer(e){
            this.setState({
                validateAns: true
            });
        }


    render(){
        let question = this.state.question;
        let options = this.state.options;
        let validateAns = this.state.validateAns;
        let answer = this.state.answer;
        return (
            <div
                style={
                    {
                      color: 'black',
                      width: '75%',
                      paddingBottom: '20px',
                      margin: 'auto'
                    }
                  }
            >
            <Segment 
                fluid 
                style={{textAlign: 'left'}}
                >
                  Q. {question}
            </Segment>
            {
                options.map(option => (
                    <Button basic onClick= {(e) => this.checkAnswer(e)} color={(validateAns ? (answer === option) ? 'green' : 'red' : 'black')} value={option}>{option}</Button>
                ))
            }   
            </div>  
        )
    }
}