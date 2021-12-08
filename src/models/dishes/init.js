import { addDish, initDishes, fetchDishesFx, updateDishes, $dishes } from './index';
import { setLoading } from '../loading';

$dishes
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