import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './actions';

export interface CountState {
    counter: number;
}

export const initialState: CountState = {
    counter: 0
};

const counterReducer = createReducer(initialState,
    on(increment, state => ({ counter: state.counter + 1 })),
    on(decrement, state => ({ counter: state.counter - 1 })),
    on(reset, () => ({ counter: 0 })),
);

export function reducer(state: CountState, action: Action) {
    return counterReducer(state, action);
}