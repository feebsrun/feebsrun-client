import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() saveAction: Function;

  @Output() onSubmit: EventEmitter<void> = new EventEmitter();
  
  @ViewChild(ModalDirective) modalDirective: ModalDirective;

  constructor() { }

  openModal(): void {
    this.modalDirective.show();
  }

  closeModal(): void {
    this.modalDirective.hide();
  }

  submit(): void {
    this.onSubmit.emit();
    this.closeModal();
  }
}