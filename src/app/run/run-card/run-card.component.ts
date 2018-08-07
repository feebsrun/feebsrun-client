import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../../models/run.model';

@Component({
  selector: 'app-run-card',
  templateUrl: './run-card.component.html',
  styleUrls: ['./run-card.component.scss']
})
export class RunCardComponent implements OnInit {

  @Input()
  run:Run;

  constructor() { }

  ngOnInit() {
  }

}
