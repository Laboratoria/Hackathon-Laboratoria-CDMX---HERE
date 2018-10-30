import React from 'react';
import {Icon, Navbar, NavItem, Dropdown, Button} from 'react-materialize';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

const startRoute = () => (
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
    <div className='inputContainer'>
    <p>Ruta 002 - Colegio Amado Nervo</p>
    <p>Próximo Destino: Dresde 4-1, Juarez</p>
    <p><Icon tiny className="actual">brightness_1</Icon> Alumnos Actuales: 0 </p>
    <p><Icon tiny className="pending">brightness_1</Icon> Alumnos Pendientes: 10 </p>
    </div>
    </div>
)

export default startRoute