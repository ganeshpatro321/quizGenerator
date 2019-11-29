import React from 'react'
import { Segment } from 'semantic-ui-react'

export const Summary = ({summary}) => {
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
        <h4>Summary</h4>
        <Segment 
        fluid
        style={{textAlign: 'justify'}}
        >
          {summary}
        </Segment>
      </div>
  )
}