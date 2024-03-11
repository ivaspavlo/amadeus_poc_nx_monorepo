import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '@amadeus/feature-auth';

@Component({
  selector: 'amadeus-login-page',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  constructor(private router: Router) { }

  public onSubmit(): void {
    this.router.navigateByUrl('/search');
  }
}
