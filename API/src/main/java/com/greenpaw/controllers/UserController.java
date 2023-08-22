package com.greenpaw.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.greenpaw.entities.UserEntity;
import com.greenpaw.config.PasswordHasher;
import com.greenpaw.entities.LoginRequest;
import com.greenpaw.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/")
public class UserController {

    private final UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<UserEntity> getUserById(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity user) {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public UserEntity updateUser(@PathVariable Long id, @RequestBody UserEntity updatedUser) {
        if (userRepository.existsById(id)) {
            return userRepository.save(updatedUser);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        UserEntity matchingUser = userRepository.findByEmail(loginRequest.getEmail());

        if (matchingUser == null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Ups! Parece que todavía no te has registrado."));
        }

        // Verifica si la contraseña en texto plano coincide con la contraseña encriptada almacenada
        if (loginRequest.getPassword().equals(matchingUser.getPassword())) {
            return ResponseEntity.ok(Map.of("success", true, "user", matchingUser));
        }

        // Si la comparación anterior falla, verifica si la contraseña ingresada coincide con la contraseña encriptada almacenada
        if (PasswordHasher.hashPassword(loginRequest.getPassword()).equals(matchingUser.getPassword())) {
            return ResponseEntity.ok(Map.of("success", true, "user", matchingUser));
        }

        // Si ninguna verificación tiene éxito, devuelve un mensaje de error
        return ResponseEntity.ok(Map.of("success", false, "message", "Email o contraseña incorrectos."));
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserEntity newUser) {
        // Verifica si ya existe un usuario con el correo indicado
        UserEntity existingUser = userRepository.findByEmail(newUser.getEmail());
        if (existingUser != null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Parece que ya existe una cuenta con este email."));
        }

        newUser.setIdRol(1); // Establece el rol por defecto como '1' para 'Usuario Normal'
        newUser.setCantidadPuntos(0); // Establece los puntos por defecto como '0'

        // Hashea la contraseña antes de guardarla en la base de datos
        String hashedPassword = PasswordHasher.hashPassword(newUser.getPassword());
        newUser.setPassword(hashedPassword);

        // Guarda el nuevo usuario en la base de datos
        UserEntity registeredUser = userRepository.save(newUser);

        if (registeredUser != null) {
            return ResponseEntity.ok(Map.of("success", true, "message", "Te has registrado correctamente!."));
        } else {
            return ResponseEntity.ok(Map.of("success", false, "message", "Parece que algo ha fallado durante el registro."));
        }
    }
}
