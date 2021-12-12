import { createStore, createEvent } from 'effector'

export const addToWeek = createEvent();
export const deleteFromWeek = createEvent();
export const initWeek = createEvent();

export const $weekDishes = createStore([])
    .on(addToWeek, (state, {day, eat, dish}) => {
        let newState = state.slice();
        const dayObj = newState.filter(elem => elem.day === day)[0];
        newState[newState.indexOf(dayObj)].eat[eat] = dish;
        return newState;
    })
    .on(deleteFromWeek, (state, {day, eat}) => {
        let newState = state.slice();
        const dayObj = newState.filter(elem => elem.day === day)[0];
        newState[newState.indexOf(dayObj)].eat[eat] = {};
        return newState;
    })
    .on(initWeek, (state, day) => {
        const newDay = {
            day: day,
            eat: {
                Breakfast: {},
                Lunch: {},
                Dinner: {},
            }
        }
        return [...state, newDay]
    })