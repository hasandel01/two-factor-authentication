package com.deliktas.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Hasan Deliktaş
 * @version 1.0
 * This application covers the basic authentication witH popular 2FA method.
 *
 */
@SpringBootApplication
public class TFASecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(TFASecurityApplication.class, args);
	}
}
