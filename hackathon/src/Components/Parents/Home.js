import React from 'react';
import {Row, Col, Input, Button, Navbar, NavItem, Icon, Dropdown} from 'react-materialize';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import '../Drivers/home.css'

const parentsHome = () => (
    <div>
    <Navbar brand='' right>
        <NavItem><Dropdown trigger={
    <Button><Icon large>account_circle</Icon></Button>
  }>
  <NavItem>Reporte</NavItem>
  <NavItem>Escuela</NavItem>
  <NavItem>Perfil</NavItem>
  <NavItem divider />
<NavItem onClick={() => firebase.auth().signOut()}><Link to="/" className="black-letter">Salir</Link></NavItem>
</Dropdown></NavItem>
    </Navbar>
    <div className ="inputContainer">
    <Row>
        <Col>
        <Input placeholder="10"></Input>
        </Col>
    </Row>
    <Row>
        <Col s={12} m={12} l={12}>
            <Button>Cancelar</Button>
            <Button>Ausencia</Button>
        </Col>
    </Row>
    </div>
    </div>
)

export default parentsHome