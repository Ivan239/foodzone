import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FOOD_API_KEY_2 } from '../api_keys'
import axios from 'axios';
import './Dish.css'


function Dish() {
    let params = useParams();
    const [dish, setDish] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${FOOD_API_KEY_2}&ids=${params.dishId}`)
            setDish(result.data[0])
        }
        fetchData();
    }, [params.dishId])
    //dish = dishes.filter(dish => dish.id.toString() === params.dishId)
    console.log(dish, '3')
    let receipe = [];
    if (dish && dish.analyzedInstructions) {
        receipe = dish.analyzedInstructions[0].steps.map(el => el.step)
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
        </div>
        : null
}

export { Dish };