import { Button } from "../components/Button/Button";
import { Search } from "../components/Search/Search";
import styles from "./MainButtons.css"
import { useAuth0 } from '@auth0/auth0-react'
import { Results } from '../components/Results/Results'

function Main(props) {
    const {
        dishes,
        update,
        addToFavourite,
        favouriteDishes,
        deleteFromFavourite,
    } = props

    const {
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
      } = useAuth0()

    return <div className='main'>
        {!isAuthenticated ? <div className='reg_btn'>
            <Button onClick={loginWithRedirect}>Sign Up</Button>
            <div className="margin" />
            <Button onClick={loginWithRedirect}>Sign In</Button>
        </div> :
            <div className='main_page'>
                <Search update={update}/>
                <Results dishes={dishes} addToFavourite={addToFavourite} favouriteDishes={favouriteDishes} deleteFromFavourite={deleteFromFavourite} />
                <div className='reg_btn'>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
        }
    </div>
}

export { Main };