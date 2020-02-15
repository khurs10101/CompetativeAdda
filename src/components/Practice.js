import React from 'react'
import { Row, Col } from 'react-bootstrap'
import QuestionContainer from './test_module/QuestionContainer'

const Practice= ()=>(
    <div>
        <Row>
            <Col lg={4}>
            </Col>
            <Col lg={8}>
                <QuestionContainer/>
            </Col>
        </Row>
    </div>
)

export default Practice