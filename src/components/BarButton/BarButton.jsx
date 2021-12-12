import './BarButton.css'
import { NavLink } from 'react-router-dom'

function BarButton(props) {
    const {
        name,
    } = props

    return <div>
        <NavLink to={`/${name}`}>
            <button className='barbutton'>{name}</button>
        </NavLink>
    </div>
}

export { BarButton };