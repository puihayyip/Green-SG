package com.puihay.project4.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.puihay.project4.entities.User;
import com.puihay.project4.services.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  UserService userService;

  @GetMapping("/users")
  public List<User> getUsers() {
    return userService.getUsers();
  }

  @GetMapping("/users/{id}")
  @ResponseBody
  public User getSingleUser(@PathVariable Long id) {
    User theUser = userService.getSingleUser(id).get();
    return theUser;
  }

  @PostMapping("/users")
  public User postUser(@RequestBody User user) {
    return userService.postUser(user);
  }
}
