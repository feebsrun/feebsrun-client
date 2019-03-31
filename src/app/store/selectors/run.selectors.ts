import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromRuns from '../reducers/run.reducers';
import { Run } from 'src/app/models/run.model';


export const getRunState = createFeatureSelector<fromRuns.RunState>('runs');

export const getRunsEntities = createSelector(getRunState, fromRuns.getRuns);
export const getAllRuns = createSelector(getRunsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[id]);
})
export const getRunsLoaded = createSelector(getRunState, fromRuns.getRunsLoaded);
export const getRunsLoading = createSelector(getRunState, fromRuns.getRunsLoading);

export const getSelectedRun = createSelector(getRunsEntities, fromReducers.getRouterState, (entities, router): Run => {
  return router.state && entities[router.state.params.runId];
})