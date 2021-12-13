import { createStore, createEvent, createEffect } from 'effector'
import { FOOD_API_KEY_2, FOOD_API_KEY, FOOD_API_KEY_3 } from '../../api_keys'

export const fetchDishFx = createEffect(async ({ str }) => {
    const url = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${FOOD_API_KEY_3}&ids=${str}`
    const req = await fetch(url)
    return req.json();
})