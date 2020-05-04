import React from 'react';
import Mcqna from './Mcqna';

export const McqWrapper = ({mcqdata}) => {
    return(
        <div>
            {mcqdata.map(ques => (
                <div>
                    <Mcqna qnawithoptions={ques}/>
                </div>
            ))}
        </div>       
    )
}
