import {Injectable} from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as runActions from '../actions/run.actions';
import { RunService } from 'src/app/run/run.service';
import { Run } from 'src/app/models/run.model';
import { of } from 'rxjs';


@Injectable()
export class RunEffects {
  constructor(private actions$: Actions, private runService: RunService) {}

  @Effect()
  loadRuns$ = this.actions$
    .pipe(
      ofType(runActions.LOAD_RUNS),
      switchMap(() => {
        return this.runService.getItems()
          .pipe(
            map((response: Run[]) => new runActions.LoadRunsSuccess(response)),
            catchError(err => of(new runActions.LoadRunsFail(err)))
          );
      })
    )
}