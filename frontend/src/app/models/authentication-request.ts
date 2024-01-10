// Define an interface for authentication requests.
export interface AuthenticationRequest {

  // Optional email field for user identification.
  email?: string;

  // Optional password field for user authentication.
  password?: string;
}
