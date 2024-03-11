import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '@amadeus/feature-auth';
import { SearchComponent } from '@amadeus/feature-search';
// import { CoComponentsComponent } from '@amadeus/co-components';

@Component({
  standalone: true,
  imports: [SearchComponent, LoginComponent, RouterModule],
  selector: 'amadeus-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'amadeus-fi';
}
