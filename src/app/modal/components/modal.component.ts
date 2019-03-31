import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() saveAction: Function;
  
  @ViewChild(ModalDirective) modalDirective: ModalDirective;

  constructor() { }

  openModal(): void {
    this.modalDirective.show();
  }

  closeModal(): void {
    this.modalDirective.hide();
  }
}