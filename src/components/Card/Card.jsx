import styles from './Card.css'
import red_like from '../../assets/red_like.png'
import white_like from '../../assets/white_like.png'
import { $favouriteDishes, addToFavourite, deleteFromFavourite } from '../../models/favouriteDishes'
import { useStore } from 'effector-react'
import firebase from 'firebase'
import updateDatabase from '../updateDatabase'
import { initFavouriteDishes } from "../../models/favouriteDishes";
import { $account } from '../../models/account'
import { NavLink } from 'react-router-dom'


function Card(props) {
    const {
        title,
        image,
        dish,
    } = props

    const database = firebase.database();
    const favouriteDishes = useStore($favouriteDishes)
    const user = useStore($account)
    const uid = user.uid;
    let userId = '';
    for (let i = 0; i < uid.length; i++) {
        userId += uid[i].charCodeAt();
    }

    return <NavLink to={`/dishes/${dish.id}`} className='card'>
        <img src={image} alt={title} className='image' />
        <div className='like'>
            {
                favouriteDishes.indexOf(dish) !== -1 ? <img src={red_like} alt='red_like' className='red_like' onClick={(e) => {
                    let key;
                    let favouriteDishesDB = updateDatabase(database).ref(`users/${userId}/favouriteDishes`);
                    favouriteDishesDB.on('value', (elem) => {
                        if(elem.val() !== null) {
                            const keys = Object.keys(elem.val())
                            key = keys[favouriteDishes.indexOf(dish)];
                        }
                    })
                    deleteFromFavourite(dish.id);
                    if (key !== undefined) {
                        database.ref('favouriteDishes').child(key).remove();
                        favouriteDishesDB = updateDatabase(database).ref(`users/${userId}/favouriteDishes`);
                    }
                    e.preventDefault();
                }} /> :
                    <img src={white_like} alt='white_like' className='white_like' onClick={(e) => {
                        
                        addToFavourite(dish);
                        database.ref(`users/${userId}/favouriteDishes`).push(dish);
                        e.preventDefault();
                    }} />
            }
        </div>
        <div className='title'>
            {title}
        </div>
    </NavLink>
}

export { Card };