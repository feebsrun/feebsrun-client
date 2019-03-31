import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { Run } from 'src/app/models/run.model';

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-details.component.html',
  styleUrls: ['./run-details.component.scss']
})
export class RunDetailsComponent implements OnInit {
  run$: Observable<Run>;

  constructor(private store: Store<fromStore.EntityState>) { }

  ngOnInit(): void {
    this.run$ = this.store.select(fromStore.getSelectedRun);
  }
}