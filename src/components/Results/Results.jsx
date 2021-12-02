import { Card } from '../Card/Card'
import styles from './Results.css'

function Results(props) {
    const {
        dishes = [],
        addToFavourite,
        favouriteDishes,
        deleteFromFavourite,
    } = props

    return <div className='results'>
        { dishes.map((dish) => <Card key={dish.id} {...dish} addToFavourite={addToFavourite} dish={dish} favouriteDishes={favouriteDishes} deleteFromFavourite={deleteFromFavourite} />) }
    </div>
}

export { Results };