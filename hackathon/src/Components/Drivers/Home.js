import React from 'react';
import {Row, Col, Input, Button, Navbar, NavItem, Icon, Dropdown} from 'react-materialize';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import './home.css'

const DriverHome = () => (
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
        <h5>Ruta Asignada </h5>
        <select>
            <option value="Ruta 002 - Colegio Amado Nervo">Ruta 002 - Colegio Amado Nervo</option>
        </select>
        </Col>
    </Row>
    <Row>
        <Col>
        <h5>Estudiantes en Ruta:</h5>
        <Input placeholder="10"></Input>
        </Col>
    </Row>
    <Row>
        <Col s={12} m={12} l={12}>
            <Button>Reportes</Button>
            <Button>Iniciar Ruta</Button>
        </Col>
    </Row>
    </div>
    </div>
)

export default DriverHome