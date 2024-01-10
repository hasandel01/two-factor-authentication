// Define an interface for authentication responses.
export interface AuthenticationResponse {

  // Optional access token provided upon successful authentication.
  accessToken?: string;

  // Optional flag indicating whether Two-Factor Authentication (2FA) is enabled for the user.
  mfaEnabled?: string;

  // Optional URI for the secret image used in 2FA setup.
  secretImageUri?: string;
}
