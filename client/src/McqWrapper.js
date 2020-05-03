import React from 'react';

export default class McqWrapper extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        data: []
        };
    }

    componentDidMount(){
        const mcqdata = this.props.mcqdata;
        this.setState({
            data : mcqdata
        });
    }
    
    render() {
        const mcqdata = this.state.data;
        return(
            <div>
                {mcqdata.map((ques) => (
                    <div>
                        {ques[0].question}
                    </div>
                ))}
            </div>
        )
        };
    }