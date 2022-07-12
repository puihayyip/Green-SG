package com.puihay.project4.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.puihay.project4.entities.User;
import com.puihay.project4.repository.UserRepository;

@Service
public class UserService {

  @Autowired
  UserRepository userRepository;

  public UserService() {
  }

  public List<User> getUsers() {
    return userRepository.findAll();
  }

  public User postUser(User user) {
    return userRepository.save(user);
  }
}
