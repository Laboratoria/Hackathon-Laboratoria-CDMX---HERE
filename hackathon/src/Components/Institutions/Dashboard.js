import React from 'react';
import {Tabs, Tab, Row, Col, NavItem, Navbar, Icon, Button, Dropdown} from 'react-materialize';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import SchoolTable from '../Admin/SchoolTable';
import Form from '../Admin/Form';
import '../Admin/Dashboard.css';

const DashboardTabs = () => (
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

    <div className="container">
    <Row>
        <Col s={12} m={12} l={12}>
    <Tabs className='tab-demo z-depth-1'>
    <Tab title="Registrar Chofer"><Form /></Tab>
    <Tab title="Choferes" active><SchoolTable /></Tab>
</Tabs>
</Col>
</Row>
</div>
</div>
)

export default DashboardTabs