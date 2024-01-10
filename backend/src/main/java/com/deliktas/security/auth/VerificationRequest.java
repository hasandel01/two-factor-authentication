package com.deliktas.security.auth;

import lombok.Builder;
import lombok.Data;


/**
 * Represents a request for verifying a user through a code entered by the user.
 */

@Data
@Builder
public class VerificationRequest {

    private String email;
    private String code;
}
