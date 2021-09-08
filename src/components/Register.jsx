import React from 'react'
import { Row, Container, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function Register() {
    return (
        <Container className="mr-3 margin-top">

            <Row>
                <Col></Col>
                <Col xs={6}> <Form>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=" Confirm Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                    <p>If you have an account</p><Link to={`/login`}>click here</Link>
                </Form> </Col>
                <Col></Col>
            </Row>


        </Container>
    )
}

export default Register
