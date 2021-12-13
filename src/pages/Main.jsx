import { Button } from "../components/Button/Button";
import { Search } from "../components/Search/Search";
import "./Main.css"
import { Results } from '../components/Results/Results'
import { $dishes } from '../models/dishes'
import { useStore } from 'effector-react'
import { NavLink } from 'react-router-dom'
import { $account } from "../models/account";
import { $loading } from "../models/loading";
import loader from '../assets/loader.gif'


function Main() {
    const dishes = useStore($dishes);
    const account = useStore($account)
    const loading = useStore($loading)

    return <div className='main'>
        {!Object.keys(account).length ? <div className='reg_btn'>
            <NavLink to='/Register'>
                <Button className='signup_btn'>
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