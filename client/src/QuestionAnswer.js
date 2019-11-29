import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

export const QuestionAnswer = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div 
      style={
        {
          color: 'black',
          width: '50%',
          paddingBottom: '20px'
        }
      }
      >
      <Segment 
        fluid 
        onClick={() => setShowAnswer(!showAnswer)}
        >
          Q. {question}
        </Segment>
      {showAnswer && <Segment fluid>{answer}</Segment>}
    </div>
  )
}