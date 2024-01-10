// Define an interface for user registration requests.
export interface RegisterRequest {

  // Optional field for the user's first name.
  firstname?: string;

  // Optional field for the user's last name.
  lastname?: string;

  // Optional field for the user's email address.
  email?: string;

  // Optional field for the user's chosen password.
  password?: string;

  // Optional field for the user's role (if applicable).
  role?: string;

  // Optional field indicating whether Two-Factor Authentication (2FA) is enabled for the user.
  mfaEnabled?: string;
}
