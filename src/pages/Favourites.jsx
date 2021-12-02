import { Results } from '../components/Results/Results'

function Favourites(props) {
    const {
        favouriteDishes,
        addToFavourite,
        deleteFromFavourite,
    } = props;

    return <Results dishes={favouriteDishes} favouriteDishes={favouriteDishes} addToFavourite={addToFavourite} deleteFromFavourite={deleteFromFavourite} />
}

export { Favourites };