import { createStore, createEvent, createEffect } from 'effector'
import { FOOD_API_KEY_2, FOOD_API_KEY } from '../../api_keys'

export const fetchDishFx = createEffect(({ str }) => {
    const url = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${FOOD_API_KEY}&ids${str}`
    const req = fetch(url)
    return req.json();
})