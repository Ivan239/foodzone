import styles from './Card.css'
import red_like from '../../assets/red_like.png'
import white_like from '../../assets/white_like.png'

function Card(props) {
    const {
        title,
        image,
        addToFavourite,
        dish,
        favouriteDishes,
        deleteFromFavourite,
    } = props

    return <div className='card'>
        <img src={image} alt={title} className='image' />
        <div className='like'>
            {
                favouriteDishes.includes(dish) !== -1 ? <img src={red_like} alt='red_like' className='red_like' onClick={() => {
                    deleteFromFavourite(dish.id);
                }} /> :
                    <img src={white_like} alt='white_like' className='white_like' onClick={() => {
                        addToFavourite(dish);
                    }} />
            }
        </div>
        <div className='title'>
            {title}
        </div>
    </div>
}

export { Card };