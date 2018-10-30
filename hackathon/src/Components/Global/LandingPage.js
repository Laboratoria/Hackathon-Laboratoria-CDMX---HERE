import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col} from 'react-materialize';
import './LandingPage.css';
import Chat from '../Parents/Chat';

const landingPage = () => (
    <div>
        <div className="nav">
            <Link to="/login">empresa | familia | institución</Link>
        </div>
        <div className="banner">
        <section className="slogan">
            <h1>Logo</h1>
            <h5>SloganSloganSlogan</h5>
        </section>
        </div>
        <section className="info">
        <Row>
            <Col m={3} s={6}>
                <Card className='black' textClassName='white-text' title='Confianza'>
                Lorem ipsum dolor sit amet, 
                et sed quod                
                 </Card>
            </Col>
            <Col m={3} s={6}>
                <Card className='black' textClassName='white-text' title='Confianza'>
                Lorem ipsum dolor sit amet, 
                et sed quod
                 </Card>
            </Col>
            <Col m={3} s={6}>
                <Card className='black' textClassName='white-text' title='Confianza'>
                Lorem ipsum dolor sit amet, 
                et sed quod
                 </Card>
            </Col>
        </Row>
        </section>
        <Chat />
    </div>
)

export default landingPage