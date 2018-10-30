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
        <Col s={12} m={12} l={12}>
            <Input type="text" placeholder="Agregar Hijx"></Input>
            <p>Daniel Mejía Flores</p>
            <p>Linda Mejía Flores</p>
            <Icon><Link to="/parent-route">arrow_forward</Link></Icon>
        </Col>
    </Row>
    </div>
    </div>
)

export default parentsHome