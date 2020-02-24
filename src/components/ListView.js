import React from 'react'
import SingleList from './SingleList'
import styled from 'styled-components'

const Styles = styled.div`
    
    

`
const items=['Bank Exams', 'SSC', 'Railways', 'UPSC', 'GATE']


const ListView =()=>(
    <Styles>
    <div>
        <ul>
            <div>
                {items.map((item, idx) =>(
                    <SingleList key={idx} item={item} />
                ))}
            </div>
        </ul>
    </div>
    </Styles>
)

export default ListView