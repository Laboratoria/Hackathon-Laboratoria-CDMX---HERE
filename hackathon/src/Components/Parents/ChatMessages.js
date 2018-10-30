import React, {Component} from 'react'
import firebase from 'firebase'
import {Preloader} from 'react-materialize'


class commentCard extends Component {
    constructor() {
        super()
        this.state = {
         data : []
        }
    }

    
    componentDidMount() {
    let db = firebase.firestore();
    db.collection('publicaciones').get()
    .then((querySnapshot) => {
            let allPosts = [];
            querySnapshot.forEach(function(doc) {
                console.log(doc.data().post)
                allPosts.push(doc.data().post)
            })
            this.setState({data : allPosts});            
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        console.log(this.state.data);
        if(this.state.data.length === 0) {
            return (<div><Preloader size='small'/></div>)
        } else {
            return (  
                <div className="chatMessages">    
                    {this.state.data.map((i) => <p>{i}</p>)}
                </div>  
            )
        }
    }
}

export default commentCard