import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Logo } from './components/Logo/Logo';
import { Main } from './pages/Main'
import NotFoundPage from './pages/NotFoundPage';
import React from 'react'
import { TopBar } from "./components/TopBar/TopBar";
import randomSearch from "./components/randomSearch";
import { Favourites } from "./pages/Favourites";

export const buttons = [
  { name: 'Main' },
  { name: 'Favourites' },
  { name: 'Week Menu' },
  { name: 'Button 4' }
]

class App extends React.Component {
  state = {
    dishes: [],
    loading: true,
    favouriteDishes: [],
  };

  componentDidMount() {
    let str = randomSearch();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5b7594bb9ce44dab92220481200c5f4c&query=${str}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dishes: data.results, loading: false })
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  update = (str) => {
    this.setState({ loading: true });
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=5b7594bb9ce44dab92220481200c5f4c&query=${str}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dishes: data.results, loading: false })
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  addToFavourite = (newDish) => {
    this.setState({favouriteDishes: [...this.state.favouriteDishes, newDish]});
  }

  deleteFromFavourite = (id) => {
    this.setState({favouriteDishes: this.state.favouriteDishes.filter(dish => dish.id !== id)});
  }

  render() {
    return (
      <BrowserRouter>
        <Logo />
        <TopBar />
        {
          this.state.loading ? <div>Loading...</div> :
            <Routes>
              <Route path="/" element={<Main dishes={this.state.dishes} update={this.update} />} />
              <Route path="/Main" element={<Main dishes={this.state.dishes} update={this.update} addToFavourite={this.addToFavourite} favouriteDishes={this.state.favouriteDishes} deleteFromFavourite={this.deleteFromFavourite} />} />
              <Route path="/Favourites" element={<Favourites favouriteDishes={this.state.favouriteDishes} addToFavourite={this.addToFavourite} deleteFromFavourite={this.deleteFromFavourite} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        }
      </BrowserRouter>
    );
  }
}

export default App;
