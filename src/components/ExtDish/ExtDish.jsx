import ext from '../../assets/dots.png'
import './ExtDish.css'
import { weekDays, eatTime } from '../weekData'
import { useState } from 'react'
import { ExtDay } from '../ExtDay/ExtDay'
import close from '../../assets/close.png'
import { ExtMenu } from '../ExtMenu/ExtMenu'

function ExtDish(props) {
    const {
        dish,
    } = props

    const [showExt, setShowExt] = useState(false)
    const showExternal = (e) => {
        e.preventDefault();
        setShowExt(!showExt)
    }

    return <div className='external'>
        <img src={ext} alt='ext' className='external_img' onClick={(e) => showExternal(e)} />
        {showExt ?
            <ExtMenu dish={dish} /> : null}

    </div>
}

export { ExtDish };