import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthHelper } from './auth-helper';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  protected email = signal('');
  protected password = signal('');
  #authHelper = inject(AuthHelper);

  onSubmit() {
    this.#authHelper.authenticate(this.email(), this.password());
  }
}
