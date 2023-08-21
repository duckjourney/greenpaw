package com.greenpaw.entities;

public class AuthenticationResponse {
    private boolean success;
    private String message;
    private UserEntity user;

    public AuthenticationResponse(boolean success, String message, UserEntity user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }
}
