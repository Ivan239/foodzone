import { createStore, createEvent } from 'effector'

export const addAccount = createEvent();
export const deleteAccount = createEvent();

export const $account = createStore({})
    .on(addAccount, (_, account) => account)
    .on(deleteAccount, (_) => { return {} })