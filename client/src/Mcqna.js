import React from 'react';
import { Segment } from 'semantic-ui-react';

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
        console.log(qnawithoptions);
            this.setState({
                question: qnawithoptions[0].question,
                answer: qnawithoptions[0].answer,
                options: qnawithoptions[1]
            })
    }

    render(){
        let question = this.state.question;
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
            </div>
        )
    }
}