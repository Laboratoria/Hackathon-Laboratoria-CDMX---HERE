import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Login from './Components/Global/Login';
import LandingPage from './Components/Global/LandingPage';
import Form from './Components/Admin/Form';

        const login = () => (
            <div>
                <Login />
            </div>
        );

        const landing = () => (
            <div>
                <LandingPage />
            </div>
        );

        const registerInstitution = () => (
            <div>
                <Form />
            </div>
        );

const Routes = () => (
    <Router basename={process.env.PUBLIC_URL}>      
            <Switch>
                <Route exact strict path="/" component= {landing} />                
                <Route exact strict path="/login" component= {login} />
                <Route exact strict path="/register-institution" component= {registerInstitution} />
            </Switch>
    </Router>   
);

export default Routes
