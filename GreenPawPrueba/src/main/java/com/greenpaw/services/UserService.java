package com.greenpaw.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.greenpaw.entities.UserEntity;
import com.greenpaw.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity findUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.findById(id).ifPresentOrElse(
                user -> userRepository.delete(user),
                () -> { throw new RuntimeException("Usuario no encontrado"); }
        );
    }

    public UserEntity updateUser(Long id, UserEntity updatedUser) {
        return userRepository.findById(id).map(
                existingUser -> {
                    existingUser.setNickname(updatedUser.getNickname());
                    existingUser.setEmail(updatedUser.getEmail());
                    existingUser.setCantidadPuntos(updatedUser.getCantidadPuntos());
                    return userRepository.save(existingUser);
                }
        ).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public UserEntity findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
