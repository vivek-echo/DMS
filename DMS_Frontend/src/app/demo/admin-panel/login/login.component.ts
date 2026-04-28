import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../commonServices/auth.service';
import { FormValidationService } from '../../commonServices/form-validation-service';
import { RdService } from '../../commonServices/rd.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  showPassword = false;
  isLoading = false;
  errorMessage = '';
  isDeviceReady = false;
  deviceStatus = 'Not Initialized';
  isInitializingDevice = false;
  isCapturingFingerprint = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly formValidation: FormValidationService,
    private readonly el: ElementRef,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly rdService: RdService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.errorMessage = '';

    // if (!this.formValidation.validateForm(this.loginForm, this.getFieldName, this.el)) {
    //   return;
    // }

    this.isLoading = true;

    try {
      const response: any = await lastValueFrom(this.authService.login(this.loginForm.value));

      if (response.success === true) {
        localStorage.setItem('auth_token', response.data.token);
        localStorage.setItem('auth_user', JSON.stringify(response.data.user));
        await this.router.navigate(['/application/dashboard']);
      } else {
        this.errorMessage = response.message || 'Login failed';
      }
    } catch (error) {
      console.error('Login Error:', error);
    } finally {
      this.isLoading = false;
    }
  }

  getFieldName(field: string): string {
    const map: Record<string, string> = {
      email: 'Email',
      password: 'Password'
    };

    return map[field] || field;
  }

  async loginWithFingerprint() {
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32),
          userVerification: 'required'
        }
      });

      console.log('Fingerprint success', credential);
    } catch (error) {
      console.error('Fingerprint failed', error);
    }
  }

  
}
