import './WeekMenu.css'
import { weekDays } from '../components/weekData'
import { WeekDay } from '../components/WeekDay/WeekDay';

function WeekMenu() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    let newWeekDays = [];
    for (let i = 0; i < weekDays.length; i++) {
        newWeekDays.push(weekDays[(i + dayOfWeek) % (weekDays.length)])
    }
    return <div className='weekmenu'>
        {newWeekDays.map(day => <div className="day_menu">
            <WeekDay key={day} day={day} />
        </div>)}
    </div>
}

export { WeekMenu };