import { Component, inject, Input, OnInit } from '@angular/core';
import { FeatureListComponent } from '../../components/feature-list/feature-list.component';
import { InputComponent } from '../../../../shared/components/input/input.component';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forgot-password',
  imports: [
    FeatureListComponent,
    InputComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent implements OnInit {
  @Input() featureList!: string;

  _authService = inject(AuthService);

  private readonly httpClient = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  ngOnInit(): void {
    this.initForm();
  }

  verifyEmawil!: FormGroup;
  verifyCode!: FormGroup;
  resetPassword!: FormGroup;
  step: number = 1;

  initForm(): void {
    this.verifyEmawil = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.verifyCode = this.fb.group({
      resetCode: ['', [Validators.required]],
    });
    this.resetPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required]],
    });
  }

  formStep1(): void {
    if (this.verifyEmawil.valid) {
      this._authService.forgotPassword(this.verifyEmawil.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 2;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  formStep2(): void {
    if (this.verifyCode.valid) {
      this._authService.verifyResetCode(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 3;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  formStep3(): void {
    if (this.resetPassword.valid) {
      this._authService.resetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          console.log(res);
          // save token
          this.cookieService.set('token', res.token);
          // navigatorHoem
          this.router.navigate(['/exams']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
