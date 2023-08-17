package com.greenpaw.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.greenpaw.entities.UserEntity;
import com.greenpaw.repository.UserRepository;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity findUserById(long id) {
        Optional<UserEntity> userOptional = Optional.ofNullable(userRepository.findById(id));
        return userOptional.orElse(null); // Maneja el caso en el que no se encuentre el usuario
    }

    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        Optional<UserEntity> userToDelete = userRepository.findById(id);
        if (userToDelete.isPresent()) {
            userRepository.delete(userToDelete.get());
        } else {
            // Manejar la situación si no se encuentra el usuario
            throw new RuntimeException("Usuario no encontrado");
        }
    }

    public UserEntity updateUser(Long id, UserEntity updatedUser) {
        Optional<UserEntity> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            UserEntity existingUser = existingUserOptional.get();
            existingUser.setNickname(updatedUser.getNickname());
            existingUser.setCorreo(updatedUser.getCorreo());
            existingUser.setCantidad_puntos(updatedUser.getCantidad_puntos());
            return userRepository.save(existingUser);
        } else {
            // Manejar la situación si no se encuentra el usuario
            throw new RuntimeException("Usuario no encontrado");
        }
    }   
}

