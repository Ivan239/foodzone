import './Logo.css'
import { NavLink } from 'react-router-dom'

function Logo() {
    return <NavLink to='/' className='logo'>
        <h1>FoodZone</h1>
    </NavLink>
}

export { Logo };
