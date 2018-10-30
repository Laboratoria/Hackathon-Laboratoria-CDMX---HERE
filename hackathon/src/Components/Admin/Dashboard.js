import React from 'react';
import {Tabs, Tab, Row, Col} from 'react-materialize';
import SchoolTable from './SchoolTable';
import Form from './Form';
import './Dashboard.css';

const DashboardTabs = () => (
    <div className="container">
    <Row>
        <Col s={12} m={12} l={12}>
    <Tabs className='tab-demo z-depth-1'>
    <Tab title="Registrar Escuela"><Form /></Tab>
    <Tab title="Escuelas" active><SchoolTable /></Tab>
</Tabs>
</Col>
</Row>
</div>
)

export default DashboardTabs