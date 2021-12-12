import './ExtDay.css'
import { useState } from 'react'
import { eatTime } from '../weekData'
import { ExtEat } from '../ExtEat/ExtEat'

function ExtDay(props) {
    const {
        day,
        dish,
    } = props

    const [showEat, setShowEat] = useState(false)
    const showEats = (e) => {
        e.preventDefault();
        setShowEat(!showEat)
    }

    return <div className='external_day' onClick={(e) => showEats(e)}>
        <p className='day_name'>{day}</p>
        {showEat ?
            <div className='eat_day'>
                {eatTime.map(eat => <ExtEat key={eat} eat={eat} day={day} dish={dish} />)}
            </div> : null
        }
    </div>
}

export { ExtDay };