import { addToWeek, deleteFromWeek } from '../../models/weekDishes/index';
import './ExtEat.css'
import firebase from 'firebase'
import updateDatabase from '../updateDatabase';
import { useStore } from 'effector-react'
import { $account } from '../../models/account'
import getNumber from '../getNumber';

function ExtEat(props) {
    const {
        eat,
        day,
        dish,
    } = props
    const database = firebase.database();
    const user = useStore($account)
    const userId = getNumber(user.uid);

    return <div className='external_eat' >
        <p className='eat_name' onClick={() => {
            database.ref(`users/${userId}/weekDishes/${day}/${eat}`).remove();
            addToWeek({ dish, day, eat })
            database.ref(`users/${userId}/weekDishes/${day}/${eat}`).push(dish);
        }}
        >{eat}</p>
    </div>
}

export { ExtEat };