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
            <Col>
                <h5 class="header">Laura Soberanes Silva</h5>
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="active" href="#test4">Pendiente</a></li>
                        <li class="tab"><a href="#test5">Recogido</a></li>
                        <li class="tab"><a href="#test6">Ausente</a></li>
                    </ul>
            </Col>
            <br></br>
            <Col>
                <h5 class="header">Pablo Rivera Olveira</h5>
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="active" href="#test4">Pendiente</a></li>
                        <li class="tab"><a href="#test5">Recogido</a></li>
                        <li class="tab"><a href="#test6">Ausente</a></li>
                    </ul>
            </Col>
            <br></br>
            <Col>
                <h5 class="header">Karla Acosta Ramirez</h5>
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="active" href="#test4">Pendiente</a></li>
                        <li class="tab"><a href="#test5">Recogido</a></li>
                        <li class="tab"><a href="#test6">Ausente</a></li>
                    </ul>
            </Col>
            <br></br>
    <Row>
        <Col s={12} m={12} l={12}>
            <Button>Reportes</Button>
            <Button><Link to="/driver-route">Iniciar Ruta</Link></Button>
        </Col>
    </Row>
    </div>
    </div>
)

export default DriverHome