import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

export default class Mcqna extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: '',
            options: []
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


    render(){
        let question = this.state.question;
        let options = this.state.options;
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
                    <Button>{option}</Button>
                ))
            }
            </div>
        )
    }
}