// * Import React
import React from 'react';

// * Import router DOM
import { Link } from 'react-router-dom';

// * Import bootstrap
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

function SignUp({ signIn }) {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} sm={8} md={6}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group
                                    className='mb-3'
                                    controlId='formBasicEmail'
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Enter email'
                                    />
                                    <Form.Text className='text-muted'>
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='formBasicPassword'
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Enter Password'
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='formBasicPassword2'
                                >
                                    <Form.Label>Repeat Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Enter Repeat Password'
                                    />
                                </Form.Group>
                                <Button onClick={signIn} variant='primary'>
                                    Submit
                                </Button>
                                <Form.Group className='mt-3'>
                                    <small>
                                        SIGN UP or{' '}
                                        <Link to='/auth/sign-in'>SIGN IN</Link>
                                    </small>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;
