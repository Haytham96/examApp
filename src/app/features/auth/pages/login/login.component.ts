import { Component, inject, Input, OnInit } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';
import { AuthService } from 'auth';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { CookieService } from 'ngx-cookie-service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    FeatureListComponent,
    ReactiveFormsModule,
    RouterLink,
    InputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @Input() featureList!: string;
  subscription: Subscription = new Subscription();

  _authService = inject(AuthService);

  private readonly httpClient = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  ngOnInit(): void {
    this.loginForm;
    this.getValuesLogin();
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
      ],
    ],
  });
  getValuesLogin() {
    if (this.loginForm.valid) {
      this.subscription.unsubscribe();
      this.subscription = this._authService
        .login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);

            if (res.message == 'success') {
              this.cookieService.set('token', res.token);
              this.router.navigate(['exams']);
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
