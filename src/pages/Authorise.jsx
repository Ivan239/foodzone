import React from "react";
import { Button } from "../components/Button/Button";
import firebase from 'firebase';
import { NavLink } from "react-router-dom";
import'./Form.css'

class Authorise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = ({ target: { value, id } }) => {
        this.setState({
            [id]: value
        })
    }

    createAccount = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    createAccountGoogle = () => {
        const auth = firebase.auth()
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = auth.signInWithRedirect(provider);
        console.log(user)
    }

    render() {
        return <div className='form'>
            <h1>Authorisation form:</h1>
            <p>E-mail:</p>
            <input
                type='text'
                placeholder='email'
                onChange={this.handleChange}
                id='email'
            />
            <p>Password:</p>
            <input
                type='password'
                placeholder='password'
                onChange={this.handleChange}
                id='password'
            />
            <NavLink to='/' className='submit'>
                <Button onClick={this.createAccount}>
                    Submit
                </Button>
            </NavLink>
            <p className='or'>or</p>
            <NavLink to='/' className='submit'>
                <Button onClick={this.createAccountGoogle}>Sign in with Google</Button>
            </NavLink>
        </div>
    }
}

export { Authorise };