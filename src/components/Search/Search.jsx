import './search.css'
import button from '../../assets/search.svg'
import React from 'react';
import { updateDishes } from "../../models/dishes/index";

class Search extends React.Component {
    state = {
        search: '',
    };
    handleUpdate = (e) => {
        this.setState({ search: e.target.value });
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            updateDishes(this.state.search)
        }
    };

    render() {
        return <div className='search'>
            <input
                className="search_field"
                placeholder="Spaghetti Carbonara"
                type="search"
                value={this.state.search}
                onChange={this.handleUpdate}
                onKeyDown={this.handleKey}
            />

            <img
                src={button}
                className="search_img"
                alt='search-img'
            />
        </div>
    }
}

export { Search };
