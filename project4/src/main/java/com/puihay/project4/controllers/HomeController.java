package com.puihay.project4.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.puihay.project4.entities.Car;
import com.puihay.project4.entities.Mscp;
import com.puihay.project4.entities.User;
import com.puihay.project4.services.CarService;
import com.puihay.project4.services.MscpService;
import com.puihay.project4.services.UserService;

@RestController
@RequestMapping("/api")
public class HomeController {

  @Autowired
  UserService userService;
  @Autowired
  MscpService mscpService;
  @Autowired
  CarService carService;

  @GetMapping("/sayhello")
  public String sayHello() {
    return "Hello spring controller";
  }

  @GetMapping("/getusers")
  public List<User> getUsers() {
    return userService.getUsers();
  }

  @PostMapping("/postuser")
  public User postUser(@RequestBody User user) {
    return userService.postUser(user);
  }

  @GetMapping("/getmscps")
  public List<Mscp> getMscps() {
    return mscpService.getMscps();
  }

  @PostMapping("/postmscp")
  public Mscp postMscp(@RequestBody Mscp mscp) {
    return mscpService.postMscp(mscp);
  }

  @GetMapping("/getcars")
  public List<Car> getCars() {
    return carService.getCars();
  }

  @PostMapping("/postcar")
  public Car postCar(@RequestBody Car car) {
    return carService.postCar(car);
  }
}
