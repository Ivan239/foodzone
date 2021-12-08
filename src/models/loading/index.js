import { createStore, createEvent } from 'effector'

export const setLoading = createEvent();

export const $loading = createStore(false)
    .on(setLoading, (_, newLoading) => {
        return newLoading;
    })
