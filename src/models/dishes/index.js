import { createStore, createEvent, createEffect } from 'effector'
import { FOOD_API_KEY_2, FOOD_API_KEY, FOOD_API_KEY_3 } from '../../api_keys'
import { setLoading } from '../loading';

export const addDish = createEvent();
export const fetchDishesFx = createEffect(async ({ str }) => {
    //setLoading(true);
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${FOOD_API_KEY_3}&query=${str}`
    const req = await fetch(url)
    return req.json();
})

export const initDishes = createEvent();
export const updateDishes = createEvent();

export const $dishes = createStore([])
    .on(addDish, (state, dish) => [...state, dish])
    .on(initDishes, (_, dishes) => dishes)
    .on(updateDishes, (_, str) => {
        setLoading(true);
        fetchDishesFx({ str: str })
        fetchDishesFx.done.watch(({ result }) => {
            initDishes(result.results)
            setLoading(false);
        })
    })
