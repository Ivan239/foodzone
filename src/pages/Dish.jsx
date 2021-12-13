import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FOOD_API_KEY_3 } from '../api_keys'
import axios from 'axios';
import './Dish.css'
import getNumber from '../components/getNumber'
import { $favouriteDishes, addToFavourite, deleteFromFavourite } from '../models/favouriteDishes'
import { useStore } from 'effector-react'
import firebase from 'firebase'
import { $account } from '../models/account'
import { toast } from 'react-toastify';
import { ExtMenu } from '../components/ExtMenu/ExtMenu';


function Dish() {
    let params = useParams();
    const [dish, setDish] = useState([])
    const [planShow, setPlanShow] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${FOOD_API_KEY_3}&ids=${params.dishId}`)
            setDish(result.data[0])
        }
        fetchData();
    }, [params.dishId])
    let receipe = [];
    if (dish && dish.analyzedInstructions) {
        receipe = dish.analyzedInstructions[0].steps.map(el => el.step)
    }
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
    const toggleLike = () => {
        const title = getNumber(dish.title);
        const ref = database.ref(`users/${userId}/favouriteDishes/${title}`)

        if (isLiked) {
            ref.remove();
            deleteFromFavourite(dish.id);
            toast.info(`You deleted "${dish.title}" from favourite`, {
                autoClose: 3500
            })
        } else {
            ref.push(dish);
            addToFavourite(dish);
            toast.info(`You added "${dish.title}" to favourite`, {
                autoClose: 3500
            })
        }
    }
    const togglePlan = () => {
        setPlanShow(!planShow)
    }
    return dish ?
        <div className='dish'>
            <h1 className='dish_title'>{dish.title}</h1>
            <div className='dish_info'>
                <img className='dish_image' src={dish.image} alt={dish.title} />
                <ol className='dish_steps'>
                    {receipe.map(el => <li className='step'>
                        <p>
                            {el}
                        </p>
                    </li>)}
                </ol>
            </div>
            <div className='dish_buttons'>
                <button className='add_fav_btn' onClick={toggleLike}>
                    {isLiked ? 'Delete from favourite' : 'Add to favourite'}
                </button>
                <button className='week_btn' onClick={() => togglePlan()}>Plan on</button>
                <div className="ext_menu">
                    {planShow ? <ExtMenu dish={dish} /> : null}
                </div>
            </div>
        </div>
        : null
}

export { Dish };