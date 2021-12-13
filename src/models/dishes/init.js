import { addDish, initDishes, fetchDishesFx, updateDishes, $dishes } from './index';

$dishes
    .on(addDish, (state, dish) => [...state, dish])
    .on(initDishes, (_, dishes) => dishes)
    .on(updateDishes, (_, str) => {
        fetchDishesFx({ str: str })
        fetchDishesFx.done.watch(({ result }) => {
            initDishes(result.results)
        })
    })