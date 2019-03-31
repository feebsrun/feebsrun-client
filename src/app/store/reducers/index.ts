import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromRuns from './run.reducers';
import * as fromAuth from './auth.reducers';
import { Params, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface EntityState {
  runs: fromRuns.RunState;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<EntityState> = {
  runs: fromRuns.runReducer,
  routerReducer: fromRouter.routerReducer,
  auth: fromAuth.reducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer')

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while(state.firstChild) {
      state = state.firstChild;
    }

    const params = state.params;

    return { url, queryParams, params };
  }
}