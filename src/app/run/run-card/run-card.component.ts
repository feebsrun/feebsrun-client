import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Run } from '../../models/run.model';
import { faRoute, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-run-card',
  templateUrl: './run-card.component.html',
  styleUrls: ['./run-card.component.scss']
})
export class RunCardComponent implements OnInit {

  @Input() run:Run;

  @Output() open: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openRun(): void {
    this.open.emit();
  }
}
