import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth-model';
import { AuthHelper } from './auth-helper';

@Directive({
  selector: '[appRoleControl]',
})
export class RoleControl {
  userType = input.required<Permission>({ alias: 'appRoleControl' });
  #authHelper = inject(AuthHelper);

  // reference to the template it self
  #templateRef = inject(TemplateRef);
  // reference to the place in the DOM where template is directly used.
  #viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.#authHelper.activePermission() === this.userType()) {
        this.#viewContainerRef.createEmbeddedView(this.#templateRef);
      } else {
        this.#viewContainerRef.clear();
      }
    });
  }
}
