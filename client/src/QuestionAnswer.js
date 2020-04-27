import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

export const ShowQuestionAnswer = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false)
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
        onClick={() => setShowAnswer(!showAnswer)}
        style={{textAlign: 'left'}}
        >
          Q. {question}
        </Segment>
      {showAnswer && <Segment fluid> Ans. {answer}</Segment>}
    </div>
  )
}

export const ShowQuestion = ({question}) => {
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