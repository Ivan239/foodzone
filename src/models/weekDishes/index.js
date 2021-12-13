import { createStore, createEvent } from 'effector'

export const addToWeek = createEvent();
export const deleteFromWeek = createEvent();
export const initWeek = createEvent();

export const $weekDishes = createStore([])
    .on(addToWeek, (state, { dish, day, eat }) => {
        let newState = state.slice();
        const dayObj = newState.filter(elem => elem.day === day)[0];
        newState[newState.indexOf(dayObj)].eat[eat] = dish;
        return newState;
    })
    .on(deleteFromWeek, (state, { day, eat }) => {
        let newState = state.slice();
        const dayObj = newState.filter(elem => elem.day === day)[0];
        newState[newState.indexOf(dayObj)].eat[eat] = {};
        return newState;
    })
    .on(initWeek, (state, { day, eat }) => {
        let newDay = {}
        if (day && eat) {
            if (state.filter(eatEx => day === eatEx.day).length) {
                const changeDay = state.filter(eatEx => day === eatEx.day)
                let newState = state.slice();
                newState[newState.indexOf(changeDay[0])] = {
                    day: day,
                    eat: eat,
                }
                return newState
            } else {
                newDay = {
                    day: day,
                    eat: eat,
                }
                return [...state, newDay]
            }
        }
    })