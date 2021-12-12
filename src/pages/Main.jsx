import { Button } from "../components/Button/Button";
import { Search } from "../components/Search/Search";
import "./MainButtons.css"
import { Results } from '../components/Results/Results'
import { $dishes } from '../models/dishes'
import { useStore } from 'effector-react'
import { NavLink } from 'react-router-dom'
import firebase from 'firebase'
import { useState } from 'react'
import { $account, addAccount } from "../models/account";

function Main() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const dishes = useStore($dishes);
    const account = useStore($account)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setIsAuthenticated(true)
            user.providerData.forEach((userInfo) => {
                if (user !== account) {
                    addAccount(userInfo)
                }
            })
        } else {
            $account.reset()
            setIsAuthenticated(false)
        }
    });

    return <div className='main'>
        {!isAuthenticated ? <div className='reg_btn'>
            <NavLink to='/Register'>
                <Button>
                    Sign Up
                </Button>
            </NavLink>
            <div className="margin" />
            <NavLink to='/Authorise'>
                <Button>
                    Sign In
                </Button>
            </NavLink>
        </div> :
            <div className='main_page'>
                <Search />
                <Results dishes={dishes} />
            </div>
        }
    </div>
}

export { Main };