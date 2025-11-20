import { AuthService } from 'auth';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { FeatureListComponent } from '../../components/feature-list/feature-list.component';
import { HttpClient } from '@angular/common/http';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-account',
  imports: [
    ReactiveFormsModule,
    FeatureListComponent,
    InputComponent,
    RouterLink,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent implements OnInit {
  _authService = inject(AuthService);
  @Input() featureList!: string;

  private readonly httpClient = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  subscription: Subscription = new Subscription();
  errorMsg: string = '';
  msgError: string = '';
  isLoading: boolean = false;
  initForm!: FormGroup;

  ngOnInit(): void {
    this.authForm;
    this.submitFormAccount();
  }

  authForm = this.fb.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],

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
      rePassword: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { Validators: this.confirmPassword }
  );

  submitFormAccount() {
    if (this.authForm.valid) {
      this.subscription.unsubscribe();
      this.isLoading = true;
      this._authService.register(this.authForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == 'success') {
            this.router.navigate(['login']);
          }
          this.isLoading = false;
        },

        error: (err) => {
          this.msgError = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.authForm.get('password')?.patchValue('');
    }
  }
  confirmPassword(group: AbstractControl) {
    if (group.get('password')?.value === group.get('rePassword')?.value) {
      return null;
    } else {
      group.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }
}
