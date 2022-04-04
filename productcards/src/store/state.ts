import { AppAction, InitialAppState } from './types'

function noop() {}

export const initialState: InitialAppState = {
    cards: ['1','2'],
    loading: false,
    error: '',
    pagination: {
        page: 1,
        size: 10
    },
    cartItems: [],
    dispatch: (state: InitialAppState, action: AppAction) => state,
};
