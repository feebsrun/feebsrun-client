import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef, Inject, TemplateRef, Type } from '@angular/core';
import { ModalComponent } from '../components/modal.component';
import { DOCUMENT } from '@angular/common';

import * as _ from 'lodash';

export type Content<T> = string | TemplateRef<T> | Type<T>;

export interface ModalOpts {
  title: string;
  saveAction: Function;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalComponents: ModalComponent[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, @Inject(DOCUMENT) private document: Document) {
    this.modalComponents = [];
  }

  openModal<T>(opts: ModalOpts, content: Content<T>): ModalComponent {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const ngContent = this.resolveContent(content);
    const componentRef = componentFactory.create(this.injector, ngContent);

    componentRef.instance.title = opts.title;
    componentRef.instance.saveAction = opts.saveAction;
    
    componentRef.hostView.detectChanges();
    const { nativeElement } = componentRef.location;

    this.document.body.appendChild(nativeElement);

    const instance = componentRef.instance
    instance.openModal();

    this.modalComponents.push(instance);

    return instance;
  }

  closeModal(instance: ModalComponent) {
    instance.closeModal();

    _.remove(this.modalComponents, (modalComp: ModalComponent) => modalComp === instance);
  }

  closeAllModals() {
    _.each(this.modalComponents, (modalComp) => modalComp.closeModal());
    this.modalComponents.splice(0, this.modalComponents.length);
  }

  private resolveContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }

    /** Otherwise it's a component */
    const factory = this.componentFactoryResolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}