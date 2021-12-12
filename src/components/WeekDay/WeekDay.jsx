import { eatTime } from '../../components/weekData'
import { DayEat } from '../DayEat/DayEat';
import { useState } from 'react'

function WeekDay(props) {
    const {
        day,
    } = props

    const [showDish, setShowDish] = useState(false)
    const handleShowDish = () => {
        setShowDish(!showDish)
    }

    return <div className='weekmenu'>
        <h1 className="week_day" onClick={() => handleShowDish()}>{day}</h1>
        {showDish ? eatTime.map(eat =>
            <div className="day_info" >
                <DayEat key={day+eat} day={day} eat={eat} />
            </div>
        ) : null}
    </div>
}

export { WeekDay };