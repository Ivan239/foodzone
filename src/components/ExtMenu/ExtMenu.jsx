import '../ExtDish/ExtDish.css'
import { weekDays } from '../weekData'
import { useState } from 'react'
import { ExtDay } from '../ExtDay/ExtDay'
import close from '../../assets/close.png'

function ExtMenu(props) {
    const {
        dish,
    } = props

    const [showExt, setShowExt] = useState(true)
    const showExternal = (e) => {
        e.preventDefault();
        setShowExt(!showExt)
    }

    return showExt ? <div className='external_box'>
        <div className='external_days_title'>
            <p className='external_text'>
                Eat on:
            </p>
            <img src={close} alt="close" className="close" onClick={(e) => showExternal(e)} />
        </div>
        <div className='external_days'>
            {weekDays.map(day => <ExtDay key={day} day={day} dish={dish} />)}
        </div>
    </div> : null

}

export { ExtMenu };