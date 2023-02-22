import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountState } from './reducer';

export const selectCounterState = createFeatureSelector<CountState>("count");

export const selectCounter = createSelector(
    selectCounterState,
    state => state.value
  );