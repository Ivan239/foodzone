import './Card.css'
import red_like from '../../assets/red_like.png'
import white_like from '../../assets/white_like.png'
import {$favouriteDishes, addToFavourite, deleteFromFavourite} from '../../models/favouriteDishes'
import {useStore} from 'effector-react'
import firebase from 'firebase'
import updateDatabase from '../updateDatabase'
import {initFavouriteDishes} from "../../models/favouriteDishes";
import {$account} from '../../models/account'
import {NavLink} from 'react-router-dom'
import {ExtDish} from '../ExtDish/ExtDish'
import getNumber from '../getNumber'


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
    if (uid) {
        for (let i = 0; i < uid.length; i++) {
            userId += uid[i].charCodeAt();
        }
    }

    const isLiked = favouriteDishes.indexOf(dish) !== -1
    const toggleLike = (e) => {
        const title = getNumber(dish.title);
        const ref = database.ref(`users/${userId}/favouriteDishes/${title}`)

        if (isLiked) {
            ref.remove();
            deleteFromFavourite(dish.id);
        } else {
            ref.push(dish);
            addToFavourite(dish);
        }

        e.preventDefault();
    }
    const likeImgSrc = isLiked ? red_like : white_like

    return (
        <NavLink to={`/dishes/${dish.id}`} className='card_link'>
            <div className='card' style={{backgroundImage: `url(${image})`}}>
                <img className='like' src={likeImgSrc} width={30} height={30} alt='like' onClick={toggleLike}/>
                <div className='title'>
                    {title}
                </div>
                <div className='external_card'>
                    <ExtDish dish={dish}/>
                </div>
            </div>
        </NavLink>
    )
}

export {Card};
