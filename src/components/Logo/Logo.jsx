import styles from './Logo.css'
import { NavLink } from 'react-router-dom'

function Logo() {
    return <NavLink to='/' className='link'>
        <div className={styles.Logo}>FoodZone</div>
    </NavLink>
}

export { Logo };