import React from "react";
import { Button } from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import firebase from 'firebase'
import './Logout.css'
import { deleteAccount } from "../models/account";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Logout() {
    const handleLogout = () => {
        firebase.auth().signOut()
        deleteAccount();
        toast.success(`Logout successfull!`)
    }
    
    return <div className='logout'>
        <NavLink to='/' className='logout_button'>
            <Button onClick={() => handleLogout()}>
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