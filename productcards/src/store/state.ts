import { InitialAppState } from './types'

export const initialState: InitialAppState = {
    cards: ['1','2'],
    loading: false,
    error: '',
    pagination: {
        page: 1,
        size: 10
    },
};
