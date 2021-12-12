import { addToWeek } from '../../models/weekDishes/index';
import './ExtEat.css'
import firebase from 'firebase'
import updateDatabase from '../updateDatabase';
import { useStore } from 'effector-react'
import { $account } from '../../models/account'

function ExtEat(props) {
    const {
        eat,
        day,
        dish,
    } = props
    const database = firebase.database();
    const user = useStore($account)
    const uid = user.uid;
    let userId = '';
    if (uid) {
        for (let i = 0; i < uid.length; i++) {
            userId += uid[i].charCodeAt();
        }
    }

    return <div className='external_eat' >
        <p className='eat_name' onClick={() => {
            addToWeek({ dish, day, eat })
            database.ref(`users/${userId}/weekDishes/${day}/${eat}`).push(dish);
        }}
        >{eat}</p>
    </div>
}

export { ExtEat };