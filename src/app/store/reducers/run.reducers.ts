
import * as fromRun from '../actions/run.actions';
import { Run } from 'src/app/models/run.model';
import * as  _ from 'lodash';


export interface RunState {
  entities: { [id: string]: Run }
  loaded: boolean;
  loading: boolean;
}

export const initialState: RunState = {
  entities: {},
  loaded: false,
  loading: false
}

export function runReducer(state = initialState, action: fromRun.RunAction): RunState {
  switch(action.type) {
    case fromRun.LOAD_RUNS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromRun.LOAD_RUNS_SUCCESS: {
      const runs = action.payload;
      const entities = _.reduce(runs, (result, run) => {
        return {
          ...result,
          [run._id]: run
        }
      }, {});

      return {
        ...state,
        loading: false,
        loaded: true,
        entities: entities
      }
    }
    case fromRun.LOAD_RUNS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state;
}

export const getRunsLoading = (state: RunState) => state.loading;
export const getRunsLoaded = (state: RunState) => state.loaded;
export const getRuns = (state: RunState) => state.entities;