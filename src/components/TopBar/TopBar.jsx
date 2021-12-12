import { BarButton } from "../BarButton/BarButton";
import './TopBar.css'
import { buttons } from '../../App'

function TopBar() {
    
    return <div className='topbar'>
        {buttons.map((button) => <BarButton key={button.name} name={button.name} />)}
    </div>
}

export { TopBar };