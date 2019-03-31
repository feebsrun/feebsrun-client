import { Action } from '@ngrx/store';
import { Run } from 'src/app/models/run.model';

export const LOAD_RUNS = '[Runs] Load Runs';
export const LOAD_RUNS_FAIL = '[Runs] Load Runs Fail';
export const LOAD_RUNS_SUCCESS = '[Runs] Load Runs Success';

export class LoadRuns implements Action {
  readonly type = LOAD_RUNS;
}

export class LoadRunsFail implements Action {
  readonly type = LOAD_RUNS_FAIL;

  constructor(public payload: any) { }
}

export class LoadRunsSuccess implements Action {
  readonly type = LOAD_RUNS_SUCCESS;

  constructor(public payload: Run[]) { }
}

export type RunAction = LoadRuns | LoadRunsFail | LoadRunsSuccess;