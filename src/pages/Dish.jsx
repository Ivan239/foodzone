import { $dishes } from "../models/dishes";
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchDishFx } from "../models/dish";
import { FOOD_API_KEY_2 } from '../api_keys'
import axios from 'axios';
import styles from './Dish.css'


function Dish() {
    let params = useParams();
    const dishes = useStore($dishes)
    const [dish, setDish] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://api.spoonacular.com/recipes/informationBulk?apiKey=5b7594bb9ce44dab92220481200c5f4c&ids=${params.dishId}`)
            setDish(result.data)
        }
        fetchData();
    }, [params.dishId])
    //dish = dishes.filter(dish => dish.id.toString() === params.dishId)
    console.log(dish, '3')
    return <div className='dish'>
        {dish[0] ?
            <div className='dish_info'>
                <img src={dish[0].image} alt={dish.title} />
                <p className='dish_text'>
                    {dish[0].instructions}
                </p>
            </div>
            : null}
    </div>
}

export { Dish };