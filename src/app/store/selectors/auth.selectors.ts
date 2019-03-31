import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducers';

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const selectIsLoggedIn = createSelector(selectAuthState, fromAuth.selectIsLoggedIn);