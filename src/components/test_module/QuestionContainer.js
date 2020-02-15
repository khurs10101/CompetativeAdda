import React from 'react'
import SingleQuestion from './SingleQuestion'

const sample= ['A', 'B', 'C', 'D', 'E', 'F']
const QuestionContainer= ()=>(
    <div>
        {sample.map((data, index)=>(
            <SingleQuestion key={index} />
        ))}
    </div>
)

export default QuestionContainer