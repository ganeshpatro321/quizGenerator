import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

export const QuestionAnswer = ({question, answer}) => {
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
      {showAnswer && <Segment fluid>{answer}</Segment>}
    </div>
  )
}