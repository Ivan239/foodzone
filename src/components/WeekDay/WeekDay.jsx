import { eatTime } from '../../components/weekData'
import { DayEat } from '../DayEat/DayEat';
import { useState } from 'react'
import './WeekDay.css'

function WeekDay(props) {
    const {
        day,
    } = props

    const [showDish, setShowDish] = useState(true)
    const handleShowDish = () => {
        setShowDish(!showDish)
    }

    return <div className='weekmenu'>
        <div className="week_day">
            <h1 onClick={() => handleShowDish()}>{day}</h1>
            <div className='day_eats'>
            {showDish ? eatTime.map(eat =>
                <div className="day_info" key={{day, eat}}>
                    <DayEat day={day} eat={eat} />
                </div>
            ) : null}
            </div>
        </div>
    </div>
}

export { WeekDay };