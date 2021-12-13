import './BarButton.css'
import { NavLink } from 'react-router-dom'

function BarButton(props) {
    const {
        name,
    } = props

    return <div>
        <NavLink to={`/foodzone/${name}`}>
            <button className='barbutton'><h4>{name}</h4></button>
        </NavLink>
    </div>
}

export { BarButton };
