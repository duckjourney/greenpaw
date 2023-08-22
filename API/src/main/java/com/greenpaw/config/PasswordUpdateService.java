package com.greenpaw.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.greenpaw.entities.UserEntity;
import com.greenpaw.repository.UserRepository;

@Service
public class PasswordUpdateService {

    @Autowired
    private UserRepository userRepository;

    public void updateExistingPasswords() {
        // Obtén todas las entradas de la base de datos con contraseñas en texto plano
        Iterable<UserEntity> usersWithPlainTextPasswords = userRepository.findAll();

        // Recorre cada entrada y encripta la contraseña
        for (UserEntity user : usersWithPlainTextPasswords) {
            if (user.getPassword() != null) {
                String plainTextPassword = user.getPassword();
                String encryptedPassword = PasswordHasher.hashPassword(plainTextPassword);

                // Reemplaza la contraseña en texto plano con la contraseña encriptada
                user.setPassword(encryptedPassword);

                // Actualiza la entrada en la base de datos con la contraseña encriptada
                userRepository.save(user);
            }
        }
    }
}

