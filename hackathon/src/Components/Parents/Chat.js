import React, {Component} from 'react';
import {SideNav, SideNavItem, Button, Input, Footer} from 'react-materialize'
import ChatMessages from './ChatMessages';
import firebase from 'firebase';
import './chat.css';

class Chat extends Component {
    constructor() {
        super()
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.state = {
            message: '',
        }
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if(!this.state.message) {
            alert('Escribe un mensaje')
        } else {
            let db = firebase.firestore();
            db.collection('publicaciones').add({
                post: this.state.message,
                date: new Date(),
              })
                .then((docRef) => {
                  console.log('Document written with ID: ', docRef.id);
                })
                .catch(function(error) {
                  console.error('Error adding document: ', error);
                });
            };
        }

        render() {
        return (
    <SideNav
    trigger={<Button>Chat</Button>}
    options={{ closeOnClick: false }}
    >
    <SideNavItem> <ChatMessages/> </SideNavItem>
        <div className="input center"> 
            <Input onChange={this.handleOnChange} placeholder="Tu mensaje" name="message"></Input>
            <Button onClick={this.handleOnSubmit}>submit</Button>
       </div>
  </SideNav>
        );
    };
}

export default Chat