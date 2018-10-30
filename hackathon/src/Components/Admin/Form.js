import React from 'react';
// eslint-disable-next-line
import {Row, Input, Button, Col} from 'react-materialize';

const Form = () => (
    <div className='inputContainer'>
    
                <form>
                    <Row className="white-background"> 
                        <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="School Code" name="school-code" type="text"></Input>
                        </Col>
                    </Row>
                    <Row className="white-background"> 
                        <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="Student's Full name" name="student-full-name" type="text"></Input>
                        </Col>
                    </Row>
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="Tutor's Full Name" name="tutor-full-name" type="text"></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="Student ID" name="student-ID" type="text"></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="Email" name='email' type='email' validate></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="New Password" name="new-password" type="password" validate></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input className='inputHover' s={10}  m={10} l={10} label="Confirm Password" name="confirm-password" type="password" validate></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12} className='center'>
                        <Button type='submit' s={10}  m={10} l={10} waves='light' className="signUpButton">Submit</Button>
                        </Col>
                    </Row>
        </form>
    </div>
)

export default Form