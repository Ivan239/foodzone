import { Card } from '../Card/Card'
import styles from './Results.css'
import firebase from 'firebase'

function Results(props) {
    const {
        dishes
    } = props
    const database = firebase.database();
    const favouriteDishesDB = database.ref('favouriteDishes')
    let dishesId = [];
    favouriteDishesDB.on('value', (elem) => {
        let favouriteDishes;
        if(elem.val() !== null) {
            favouriteDishes = Object.values(elem.val());
            dishesId = favouriteDishes.map(dish => dish.id);
        }
    })
    return <div className='results'>
        {dishes.map((dish) => <Card key={dish.id} {...dish} dish={dish} dishesId={dishesId} />)}
    </div>
}

export { Results };