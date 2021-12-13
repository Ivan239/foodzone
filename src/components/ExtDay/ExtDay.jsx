import './ExtDay.css'
import { eatTime } from '../weekData'
import { ExtEat } from '../ExtEat/ExtEat'

function ExtDay(props) {
    const {
        day,
        dish,
    } = props

    return <div className='external_day'>
        <p className='day_name'>{day}</p>
        <div className='eat_day'>
            {eatTime.map(eat => <ExtEat key={eat} eat={eat} day={day} dish={dish} />)}
        </div>
    </div>
}

export { ExtDay };