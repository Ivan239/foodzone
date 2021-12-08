import React from "react";
import { Button } from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import firebase from 'firebase'
import styles from './Logout.css'

function Logout() {
    return <div className='logout'>
        <NavLink to='/' className='logout_button'>
            <Button onClick={firebase.auth().signOut()}>
                Yes
            </Button>
        </NavLink>
        <NavLink to='/' className='logout_button'>
            <Button>
                Go Back
            </Button>
        </NavLink>
    </div>
}

export { Logout }