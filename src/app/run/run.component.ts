import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RunService } from './run.service';
import { Run } from '../models/run.model';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {
  runs:Observable<Run>;

  runForm = new FormGroup({
    distance: new FormControl(''),
    duration: new FormControl('')
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
    this.runs = this.runService.addItem(run);
  }

}
