package com.puihay.project4.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
  public User getSingleUser(@PathVariable Long id) {
    User theUser = userService.getSingleUser(id).get();
    return theUser;
  }

  @PutMapping("/users/book")
  public User book(@RequestParam Long userId, @RequestParam Long carId) {
    return userService.book(userId, carId);
  }

  @PutMapping("/users/end")
  public User end(@RequestParam Long userId, @RequestParam int mscp) {
    return userService.end(userId, mscp);
  }

  @PostMapping("/users")
  public ResponseEntity<?> postUser(@RequestBody User user) {
    return userService.postUser(user);
  }
}
