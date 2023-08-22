package com.greenpaw.config;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordHasher {

    // Método para hashear una contraseña
    public static String hashPassword(String password) {
        try {
            // Obtén una instancia de MessageDigest con el algoritmo SHA-256 (u otro de tu elección)
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            
            // Aplica el hash a la contraseña
            byte[] hashedBytes = md.digest(password.getBytes());

            // Convierte el hash a una representación hexadecimal
            StringBuilder sb = new StringBuilder();
            for (byte b : hashedBytes) {
                sb.append(String.format("%02x", b));
            }
            
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
}
