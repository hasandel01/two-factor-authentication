package com.deliktas.security.tfa;

import dev.samstevens.totp.code.CodeGenerator;
import dev.samstevens.totp.code.CodeVerifier;
import dev.samstevens.totp.code.DefaultCodeGenerator;
import dev.samstevens.totp.code.DefaultCodeVerifier;
import dev.samstevens.totp.code.HashingAlgorithm;
import dev.samstevens.totp.exceptions.QrGenerationException;
import dev.samstevens.totp.qr.QrData;
import dev.samstevens.totp.qr.QrGenerator;
import dev.samstevens.totp.qr.ZxingPngQrGenerator;
import dev.samstevens.totp.secret.DefaultSecretGenerator;
import dev.samstevens.totp.time.SystemTimeProvider;
import dev.samstevens.totp.time.TimeProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import static dev.samstevens.totp.util.Utils.getDataUriForImage;


/**
 * Service for managing Two-Factor Authentication (2FA) operations.
 */
@Service
@Slf4j
public class TwoFactorAuthenticationService {


    /**
     * Generates a new secret for Two-Factor Authentication.
     *
     * @return The generated secret.
     */
    public String generateNewSecret() {
        return new DefaultSecretGenerator().generate();
    }


    /**
     * Generates a Data URI for the QR code image corresponding to the provided secret.
     *
     * @param secret The secret for which the QR code image is generated.
     * @return Data URI for the generated QR code image.
     */
    public String generateQrCodeImageUri(String secret) {
        QrData data = new QrData.Builder()
                .label("QR BUILT IMAGE")
                .secret(secret)
                .issuer("deliktas")
                .algorithm(HashingAlgorithm.SHA1)
                .digits(6)
                .period(30)
                .build();

        QrGenerator generator = new ZxingPngQrGenerator();
        byte[] imageData = new byte[0];
        try {
            imageData = generator.generate(data);
        } catch (QrGenerationException e) {
            e.printStackTrace();
            log.error("Error while generating QR-CODE");
        }

        return getDataUriForImage(imageData, generator.getImageMimeType());
    }

    /**
     * Validates if the provided OTP (One-Time Password) is valid for the given secret.
     *
     * @param secret The secret used to generate the OTP.
     * @param code   The OTP to be validated.
     * @return True if the OTP is valid, false otherwise.
     */
    public boolean isOtpValid(String secret, String code) {
        TimeProvider timeProvider = new SystemTimeProvider();
        CodeGenerator codeGenerator = new DefaultCodeGenerator();
        CodeVerifier verifier = new DefaultCodeVerifier(codeGenerator, timeProvider);
        return verifier.isValidCode(secret, code);
    }

    /**
     * Validates if the provided OTP (One-Time Password) is valid for the given secret.
     *
     * @param secret The secret used to generate the OTP.
     * @param code   The OTP to be validated.
     * @return True if the OTP is valid, false otherwise.
     */
    public boolean isOtpNotValid(String secret, String code) {
        return !this.isOtpValid(secret, code);
    }
}
