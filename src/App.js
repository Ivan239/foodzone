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
//import randomSearch from "./components/randomSearch";
import { Favourites } from "./pages/Favourites";
import { initDishes, fetchDishesFx } from "./models/dishes";
import { initFavouriteDishes } from "./models/favouriteDishes";
import firebase from 'firebase';
import { Register } from "./pages/Register";
import { Authorise } from './pages/Authorise';
import { Logout } from "./pages/Logout";
import { $account, addAccount } from "./models/account";
import { Dish } from "./pages/Dish";
import { WeekMenu } from "./pages/WeekMenu";
import { eatTime, weekDays } from "./components/weekData";
import { initWeek } from "./models/weekDishes";
import getNumber from "./components/getNumber";
import { ToastContainer } from 'react-toastify';
import loader from './assets/loader.gif'
import { $loading } from "./models/loading";

export const buttons = [
  { name: 'Main' },
  { name: 'Favourites' },
  { name: 'Week Menu' },
  { name: 'Logout' }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      loading: false,
      favouriteDishesInitialized: false,
      weekInitialized: false,
    }
  }

  componentDidMount() {
    $account.watch(value => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          setAccount(true);
          user.providerData.forEach((userInfo) => {
            if (user !== value) {
              addAccount(userInfo)
            }
          })
        } else {
          setAccount(false);
        }
      });
    })
    const database = firebase.database();
    $account.watch(user => {
      const userId = getNumber(user.uid);
      database.ref(`users/${userId}/favouriteDishes`)
        .once('value', (elem) => {
          if (elem.val() !== null && !this.state.favouriteDishesInitialized) {
            const initFav = Object.values(elem.val()).map(dish => Object.values(dish)['0'])
            initFavouriteDishes(initFav);
          }
        })
    })
    $account.watch(user => {
      const userId = getNumber(user.uid);
      weekDays.map(day => {

        let eats = {
          Breakfast: {},
          Lunch: {},
          Dinner: {}
        }
        const addEats = (eat, dish) => {
          eats[eat] = dish;
        }
          eatTime.map(eat => {

            let dishWeek = {}
            database.ref(`users/${userId}/weekDishes/d${day}/e${eat}`)
              .once('value', (elem) => {
                if (elem.val() !== null && !this.state.weekInitialized) {
                  dishWeek = Object.values(elem.val())[0]
                }
                return addEats(eat, dishWeek)
              })
            return addEats(eat, dishWeek)
          })
        return initWeek({
          day: day,
          eat: eats
        })
      })
    })
    const setAccount = (state) => {
      this.setState({ isAuthenticated: state })
    }

    let str = 'a'; //randomSearch();
    $loading.watch(value => {
      this.setState({loading: value})
    })
    fetchDishesFx({ str: str })
    this.setState({loading: true})
    fetchDishesFx.done.watch(({ result }) => {
      initDishes(result.results)
      this.setState({loading: false})
    })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter basename="/foodzone">
          <Logo />
          {this.state.isAuthenticated ? <TopBar /> : null}
          {
            this.state.loading ? <img src={loader} alt='Loading...' className='loading' /> :
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Authorise" element={<Authorise />} />
                <Route path="/Favourites" element={<Favourites />} />
                <Route path="/Logout" element={<Logout />} />
                <Route path="/dishes/:dishId" element={<Dish />} />
                <Route path="/Week%20Menu" element={<WeekMenu />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
          }
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2600}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;