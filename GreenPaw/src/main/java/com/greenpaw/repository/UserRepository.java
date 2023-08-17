package com.greenpaw.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.greenpaw.entities.UserEntity;


public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findById(long id);
    }