// Define an interface for verification requests, commonly used in Two-Factor Authentication (2FA).
export interface VerificationRequest {

  // Optional field for the user's email address.
  email?: string;

  // Optional field for the verification code provided by the user during 2FA setup or login.
  code?: string;
}
