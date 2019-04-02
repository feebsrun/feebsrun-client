import { OnInit, Component, Input, forwardRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeSpan } from '../../structs/TimeSpan';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface SimpleTimeSpan {
  hours: number;
  minutes: number;
  seconds: number;
}

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimespanInputComponent),
  multi: true
}

@Component({
  selector: 'timespan-input',
  templateUrl: './timespan.component.html',
  styleUrls: ['./timespan.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class TimespanInputComponent implements ControlValueAccessor, OnInit {
  timespan: TimeSpan;

  private _timespanSubject: Subject<TimeSpan>;

  timespanForm: FormGroup;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private fb: FormBuilder) {
    this.timespan = new TimeSpan();

    this._timespanSubject = new Subject();
    this._timespanSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(() => {
      this.onChange(this.timespan.totalMilliSeconds);
      this.onTouched();
    });
    
    this.timespanForm = this.fb.group({
      hours: [this.timespan.hours, [Validators.required, Validators.maxLength(3)]],
      minutes: [this.timespan.minutes, [Validators.required, Validators.max(59), Validators.min(0), Validators.maxLength(2)]],
      seconds: [this.timespan.seconds, [Validators.required, Validators.max(59), Validators.min(0), Validators.maxLength(2)]]
    });

    this.timespanForm.valueChanges.subscribe((newValues: SimpleTimeSpan) => this.onTimespanChanged(newValues));
  }

  get value() {
    return this.timespan.totalMilliSeconds;
  }

  set value(val: number) {
    this.timespan = new TimeSpan(val);
    this.timespanForm.setValue({
      hours: this.timespan.hours !== 0 ? this.timespan.hours : null,
      minutes: this.timespan.minutes !== 0 ? this.timespan.minutes : null,
      seconds: this.timespan.seconds !== 0 ? this.timespan.seconds : null
    }, {
      emitEvent: false // don't fire onChange for programmatic setting
    });
  }

  ngOnInit(): void {
    this.value = 0;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  writeValue(value: number): void {
    if (value) {
      this.value = value;
    }
  }

  onTimespanChanged(newTimespan: SimpleTimeSpan): void {
    this.timespan.hours = newTimespan.hours;
    this.timespan.minutes = newTimespan.minutes;
    this.timespan.seconds = newTimespan.seconds;

    this.updateTimespan();
  }

  private updateTimespan(): void {
    this._timespanSubject.next(this.timespan);
  }
}