import React from 'react'
import { Container ,Jumbotron, Button, Row, Col } from 'react-bootstrap'
import ListView from '../components/ListView'
import styled from 'styled-components'


const Styles = styled.div`

    *{
        margin: 0px,
        padding: 0px
    }

    Button{
        width: 80%;
    }




` 

const Dashboard=()=>(
        <Styles>
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col xs={6} align="center">
                    </Col>
                    <Col xs={6} align="right">
                        <Button className="d-lg-none" variant="outline-primary">Login</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3>Welcome to Competative Adda</h3>
                    </Col>
                    <Col xs={12}>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <ListView/>
        </Styles>
)

export default Dashboard