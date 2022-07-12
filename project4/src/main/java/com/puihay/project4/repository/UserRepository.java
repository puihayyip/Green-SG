package com.puihay.project4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.puihay.project4.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
