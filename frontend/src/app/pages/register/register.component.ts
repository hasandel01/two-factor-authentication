// Import necessary Angular modules and services.
import { Component } from '@angular/core';
import { RegisterRequest } from "../../models/register-request";
import { AuthenticationResponse } from "../../models/authentication-response";
import { AuthenticationService } from "../../serives/authentication.service"; // Assuming there was a typo in the path
import { Router } from "@angular/router";
import { VerificationRequest } from "../../models/verification-request";

// Define the component metadata.
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // Initialize variables for user registration request, authentication response, message, and verification code.
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  // Constructor function to inject services.
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  // Method to handle user registration process.
  registerUser() {
    this.message = '';
    // Send the registration request to the authentication service.
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          // Check if the registration response is available.
          if (response) {
            this.authResponse = response;
          } else {
            // Inform the user about successful account creation and redirect to the login page after a delay.
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000);
          }
        }
      });
  }

  // Method to handle Two-Factor Authentication (2FA) verification process.
  verifyTfa() {
    this.message = '';
    // Create a verification request object.
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };

    // Send the verification request to the authentication service.
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          // Inform the user about successful account creation and redirect to the 'welcome' page after a delay.
          this.message = 'Account created successfully\nYou will be redirected to the Welcome page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }, 3000);
        }
      });
  }
}
