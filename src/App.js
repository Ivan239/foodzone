import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import './App.css';
import { Logo } from './components/Logo/Logo';
import { Main } from './pages/Main'
import NotFoundPage from './pages/NotFoundPage';
import React from 'react'
import { TopBar } from "./components/TopBar/TopBar";
//import randomSearch from "./components/randomSearch";
import { Favourites } from "./pages/Favourites";
import { initDishes, fetchDishesFx } from "./models/dishes";
import { setLoading, $loading } from "./models/loading";
import { $favouriteDishes, initFavouriteDishes } from "./models/favouriteDishes";
import firebase from 'firebase';
import { Register } from "./pages/Register";
import { Authorise } from './pages/Authorise';
import { Logout } from "./pages/Logout";
import { $account, addAccount } from "./models/account";
import { Dish } from "./pages/Dish";

export const buttons = [
  { name: 'Main' },
  { name: 'Favourites' },
  { name: 'Week Menu' },
  { name: 'Logout' }
]

class App extends React.Component {

  componentDidMount() {
    $favouriteDishes.watch(value => {
      if (value.length < 1) {
        const database = firebase.database().ref('favouriteDishes');
        database.on('value', (elem) => {
          if (elem.val() !== null) {
            //initFavouriteDishes(Object.values(elem.val()));
          }
        })
      }
    })
    let str = 'a';//randomSearch();
    fetchDishesFx({ str: str })
    fetchDishesFx.done.watch(({ result }) => {
      initDishes(result.results)
    })
  }

  render() {
    let loading;
    $loading.watch(value => {
      loading = value;
    })
    let account;
    $account.watch(value => {
      account = value;
    })
    return (
      <BrowserRouter>
        <Logo />
        { account.length !== 0 ? <TopBar /> : console.log('failed') }
        {
          loading ? <div>Loading...</div> :
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Authorise" element={<Authorise />} />
              <Route path="/Favourites" element={<Favourites />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/dishes/:dishId" element={<Dish />}/>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        }
      </BrowserRouter>
    );
  }
}

export default App;