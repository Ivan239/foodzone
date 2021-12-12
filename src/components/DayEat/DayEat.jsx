import { useState, useEffect } from 'react'
import { $weekDishes, deleteFromWeek } from '../../models/weekDishes'
import { useStore } from 'effector-react'
import bin from '../../assets/bin.png'
import './DayEat.css'
import firebase from 'firebase'
import updateDatabase from '../updateDatabase';
import { $account } from '../../models/account'
import axios from 'axios';
import { FOOD_API_KEY_2 } from '../../api_keys'

function DayEat(props) {
    const {
        eat,
        day,
    } = props

    const [showDish, setShowDish] = useState(false)
    const handleShowDish = () => {
        setShowDish(!showDish)
    }
    const weekDishes = useStore($weekDishes);
    const dayObj = weekDishes.filter(elem => elem.day === day)[0];
    const dish = weekDishes[weekDishes.indexOf(dayObj)].eat[eat];
    const database = firebase.database();
    const user = useStore($account)
    const uid = user.uid;
    let userId = '';
    if (uid) {
        for (let i = 0; i < uid.length; i++) {
            userId += uid[i].charCodeAt();
        }
    }
    const [bigDish, setBigDish] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${FOOD_API_KEY_2}&ids=${dish.id}`)
            setBigDish(result.data[0])
        }
        fetchData();
    }, [dish.id])

    let receipe = [];
    if (bigDish && bigDish.analyzedInstructions) {
        receipe = bigDish.analyzedInstructions[0].steps.map(el => el.step)
    }
    console.log(bigDish)
    return <div className="day_info">
        <h2 className='eat_time' onClick={() => handleShowDish()}>{eat}</h2>
        {showDish && Object.keys(dish).length ? <div className="dish"  >
            <div className='dish_title'>
                <h3 className='dish_title_text'>{dish.title}</h3>
                <img src={bin} alt='delete' className='bin' onClick={() => {
                    deleteFromWeek({ day, eat })
                    database.ref(`users/${userId}/weekDishes/${day}/${eat}`).remove();
                }} />
            </div>
            <div className="dish_info">
                <img className='dish_image' src={dish.image} alt={dish.title} />
                <ol className='dish_steps'>
                    {receipe.map(el => <li className='step'>{el}</li>)}
                </ol>
            </div>
        </div> :
            showDish && !Object.keys(dish).length ? <p>You have no dish at this time</p> : null}
    </div>
}

export { DayEat };