import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { FiComponentsComponent } from '@amadeus/fi-components';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'amadeus-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'amadeus-co';
}
