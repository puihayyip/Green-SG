package com.puihay.GA.GreenSG.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.puihay.GA.GreenSG.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findByEmailOrUsername(String email, String username);

}
