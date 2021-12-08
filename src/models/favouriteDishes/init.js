import { $favouriteDishes, addToFavourite, deleteFromFavourite } from './index'

$favouriteDishes
    .on(addToFavourite, (state, dish) => [...state, dish])
    .on(deleteFromFavourite, (state, id) => state.filter(dish => dish.id !== id))