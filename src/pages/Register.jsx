import React from "react";
import { Button } from "../components/Button/Button";
import firebase from 'firebase';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';


class Register extends React.Component {
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
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    toast.success("Login successfull")
                })
                .catch(error => {
                    toast.error(`${error.message} Please try again.`, {
                        autoClose: 6500
                    })
                })
            )
            .catch(error => {
                toast.error(`${error.message} Please try again.`, {
                    autoClose: 6500
                })
            })
    }

    createAccountGoogle = () => {
        const auth = firebase.auth()
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(provider)
            .catch(error => {
                toast.error(`${error.message} Please try again.`, {
                    autoClose: 6500
                })
            })
    }

    render() {
        return <div className='form'>
            <h1>Registration form:</h1>
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
                <Button onClick={this.createAccountGoogle}>Sign up with Google</Button>
            </NavLink>
        </div>
    }
}

export { Register };