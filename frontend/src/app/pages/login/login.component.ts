// Import necessary Angular modules and services.
import { Component } from '@angular/core';
import { AuthenticationRequest } from "../../models/authentication-request";
import { AuthenticationResponse } from "../../models/authentication-response";
import {AuthenticationService} from "../../serives/authentication.service";
import { Router } from "@angular/router";
import { VerificationRequest } from "../../models/verification-request";

// Define the component metadata.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Initialize variables for authentication request, verification code, and authentication response.
  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  // Constructor function to inject services.
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  // Method to handle authentication process.
  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          this.authResponse = response;
          // Check if Two-Factor Authentication (2FA) is not enabled.
          if (!this.authResponse.mfaEnabled) {
            // Save access token to local storage and navigate to the 'welcome' page.
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }
        }
      });
  }

  // Method to handle verification process.
  verifyCode() {
    // Create a verification request object.
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };

    // Send the verification request to the authentication service.
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          // Verification successful, save access token to local storage and navigate to 'welcome' page.
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['welcome']);
        }
      });
  }
}
