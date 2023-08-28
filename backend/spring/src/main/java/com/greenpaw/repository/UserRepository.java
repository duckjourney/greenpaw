package com.greenpaw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.greenpaw.entities.UserEntity;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail(String email);
    @Query("SELECT u FROM UserEntity u ORDER BY u.cantidadPuntos DESC")
    List<UserEntity> findUsersSortedByPoints();
}
