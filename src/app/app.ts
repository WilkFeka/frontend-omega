import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';

import { filter } from 'rxjs';

import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend-omega');

  private readonly router = inject(Router);

  readonly showLayout = signal(
    !this.router.url.startsWith('/login')
  );

  constructor() {

    this.router.events
      .pipe(
        filter(
          event => event instanceof NavigationEnd
        )
      )
      .subscribe(event => {

        this.showLayout.set(
          !event.urlAfterRedirects.startsWith('/login')
        );

      });
  }
}