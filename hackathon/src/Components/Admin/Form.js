import React, {Component} from 'react';
import {Row, Input, Button, Modal, Col} from 'react-materialize';
import firebase from 'firebase';

class Form extends Component {
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        
        this.state = {
        email: '',
        password: '',

        }
    }

    handleRegister(event) {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            if(user) {
             window.location.assign('/dashboard-admin')
            }
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
          });
    }
    
    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
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
        <Modal
            header='Modal Header'
            trigger={<Button>Registrar</Button>}>
                    <Col>
                        <h5>Registra Nueva Escuela</h5>
                        <Input type="email" label="email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                        <Input type="password" label="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                        <Button onClick={this.handleRegister}>Confirmar</Button>
                    </Col>
        </Modal>
        </Row>
    </div>
        )
    }
}

export default Form