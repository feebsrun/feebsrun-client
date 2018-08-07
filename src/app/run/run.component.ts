import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RunService } from './run.service';
import { Run } from '../models/run.model';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading.service';
import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {
  runs:Observable<Run>;
  myDatePickerOptions: IMyOptions = {}

  runForm = new FormGroup({
    distance: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

  constructor(
    private runService: RunService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.showLoading();
    this.runs = this.runService.getItems();
  }

  addRun(){
    const run = new Run();
    run.distance = parseFloat(this.runForm.get('distance').value);
    run.time = this.runForm.get('duration').value;
    run.date = this.runForm.get('date').value;
    this.runs = this.runService.addItem(run);
  }

}
