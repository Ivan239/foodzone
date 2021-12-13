import { createStore, createEvent } from 'effector'

export const addToFavourite = createEvent();
export const deleteFromFavourite = createEvent();
export const initFavouriteDishes = createEvent();

export const $favouriteDishes = createStore([])
    .on(addToFavourite, (state, dish) => [...state, dish])
    .on(deleteFromFavourite, (state, id) => state.filter(dish => dish.id !== id))
    .on(initFavouriteDishes, (_, dishes) => dishes )