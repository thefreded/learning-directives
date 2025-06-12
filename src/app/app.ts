import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningResources } from './learning-resources/learning-resources';
import { Auth } from './auth/auth';
import { AuthHelper } from './auth/auth-helper';
import { RoleControl } from './auth/role-control';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LearningResources, Auth, RoleControl],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  #authHelper = inject(AuthHelper);

  protected isAdmin = computed(
    () => this.#authHelper.activePermission() === 'admin'
  );
}
