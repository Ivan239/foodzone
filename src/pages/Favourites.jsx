import { Results } from '../components/Results/Results'
import { useStore } from 'effector-react'
import { $favouriteDishes } from '../models/favouriteDishes';

function Favourites() {
    const dishes = useStore($favouriteDishes)
    return <Results dishes={dishes}/>
}

export { Favourites };