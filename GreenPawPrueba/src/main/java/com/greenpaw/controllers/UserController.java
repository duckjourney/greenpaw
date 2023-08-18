package com.greenpaw.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greenpaw.entities.UserEntity;
import com.greenpaw.entities.LoginRequest;
import com.greenpaw.entities.AuthenticationResponse;
import com.greenpaw.services.UserService;
import com.greenpaw.repository.UserRepository;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;
    private UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<UserEntity> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{id}")
    public UserEntity getUserById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public UserEntity updateUser(@PathVariable Long id, @RequestBody UserEntity updatedUser) {
        return userService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Optional<UserEntity> matchingUser = Optional.ofNullable(userRepository.findByEmail(loginRequest.getEmail()));

        if (matchingUser.isPresent()) {
            UserEntity user = matchingUser.get();
            String providedPasswordHash = hashPassword(loginRequest.getPassword());

            if (passwordIsValid(providedPasswordHash, user.getPassword())) {
                return ResponseEntity.ok(new AuthenticationResponse(true, "Autenticación exitosa", user));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new AuthenticationResponse(false, "Credenciales incorrectas", null));
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new AuthenticationResponse(false, "Usuario no encontrado", null));
        }
    }

    private String hashPassword(String password) {
		return password;
        // Implementa tu lógica de hashing de contraseñas aquí
    }

    private boolean passwordIsValid(String providedPasswordHash, String storedPassword) {
        return providedPasswordHash.equals(storedPassword);
    }
}
