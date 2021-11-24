import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './actions';

export interface CountState {
    value: number;
}

export const initialState: CountState = {
    value: 0
};

export const counterReducer = createReducer(initialState,
    on(increment, state => ({ value: state.value + 1 })),
    on(decrement, state => ({ value: state.value - 1 })),
    on(reset, () => ({ value: 0})),
);