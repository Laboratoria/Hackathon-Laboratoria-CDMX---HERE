import React, {Component} from 'react';
import {Row, Input, Button, Modal, Col} from 'react-materialize';
import $ from 'jquery';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        return(
    <div>
        <Row>
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
            <Input type="password" label="password" s={12} />
            <Input type="email" label="Email" s={12} />
        </Row>
        <Row>
            <div>
        <Button onClick={() => {
            $('#foo').modal('openModal')
        }}>Registrar</Button>
        <Modal
            id='foo'
            header='Modal Header'>
                <Row>
                    <Col>
                        <h5>Registra Nueva Escuela</h5>
                        <Input type="email" label="email" name="email"/>
                        <Input type="password" label="password" name="email"/>
                        <Button>Confirmar</Button>
                    </Col>
                </Row>
        </Modal>
        </div>
        </Row>
    </div>
        )
    }
}

export default Form