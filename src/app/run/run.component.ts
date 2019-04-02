import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Run } from '../models/run.model';
import { Observable } from 'rxjs';
import { IMyOptions } from 'ng-uikit-pro-standard';

import * as fromStore from '../store';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/components/modal.component';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {
  runs$:Observable<Run[]>;
  myDatePickerOptions: IMyOptions = {
    dateFormat: 'mmm dd, yyyy',
    closeAfterSelect: true
  }

  runForm = new FormGroup({
    distance: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

  @ViewChild(ModalComponent) addRunModal: ModalComponent;
  modalRef: ModalComponent;

  constructor(private store: Store<fromStore.EntityState>, private router: Router) { }

  ngOnInit() {
    this.runs$ = this.store.select(fromStore.getAllRuns);

    this.runs$.subscribe((runs) => {
      console.log(runs);
    });

    this.store.dispatch(new fromStore.LoadRuns());
  }

  addRun(){
    const run = new Run();
    run.distance = parseFloat(this.runForm.get('distance').value);
    run.time = this.runForm.get('duration').value;
    run.date = this.runForm.get('date').value;
    // this.runs = this.runService.addItem(run);

    alert(JSON.stringify(run));
  }

  openRunDialog(): void {
    this.runForm.reset({
      distance: '',
      duration: '',
      date: ''
    });
    this.addRunModal.openModal();
  }

  openRun(run: Run): void {
    // this.location.go(`runs/${run._id}`);
    this.router.navigateByUrl(`runs/${run._id}`);
  }
}
