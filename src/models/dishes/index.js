import { createStore, createEvent, createEffect } from 'effector'
import { FOOD_API_KEY_2, FOOD_API_KEY } from '../../api_keys'

export const addDish = createEvent();
export const fetchDishesFx = createEffect(async ({ str }) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${FOOD_API_KEY}&query=${str}`
    const req = await fetch(url)
    return req.json();
})

export const initDishes = createEvent();
export const updateDishes = createEvent();

export const $dishes = createStore([])
    .on(addDish, (state, dish) => [...state, dish])
    .on(initDishes, (_, dishes) => dishes)
    .on(updateDishes, (_, str) => {
        fetchDishesFx({ str: str })
        fetchDishesFx.done.watch(({ result }) => {
            initDishes(result.results)
        })
    })
