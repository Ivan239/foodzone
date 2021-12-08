import { createStore, createEvent } from 'effector'

export const addAccount = createEvent();

export const $account = createStore({})
    .on(addAccount, (_, account) => account)