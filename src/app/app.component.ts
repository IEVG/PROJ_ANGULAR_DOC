import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" alt="logo" src="assets/logo.svg" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <!-- <app-home></app-home> -->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
