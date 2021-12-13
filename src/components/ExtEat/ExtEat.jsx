import { addToWeek, deleteFromWeek } from '../../models/weekDishes/index';
import './ExtEat.css'
import firebase from 'firebase'
import updateDatabase from '../updateDatabase';
import { useStore } from 'effector-react'
import { $account } from '../../models/account'
import getNumber from '../getNumber';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExtEat(props) {
    const {
        eat,
        day,
        dish,
    } = props
    const database = firebase.database();
    const user = useStore($account)
    const userId = getNumber(user.uid);
    const notify = () => toast.info(`You added "${dish.title}" on ${day} ${eat}`)
    const data = {
        dish: dish,
        day: day,
        eat: eat
    }

    return <div className='external_eat'>
        <p className='eat_name' onClick={(e) => {
            database.ref(`users/${userId}/weekDishes/d${day}/e${eat}`).remove();
            console.log(dish, day, eat)
            addToWeek(data)
            database.ref(`users/${userId}/weekDishes/d${day}/e${eat}`).push(dish);
            notify();
            e.preventDefault();
        }}
        >{eat}</p>
    </div>
}

export { ExtEat };