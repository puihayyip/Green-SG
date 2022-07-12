package com.puihay.project4.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.puihay.project4.entities.Car;
import com.puihay.project4.services.CarService;

@RestController
@RequestMapping("/api")
public class CarController {

  @Autowired
  CarService carService;

  @GetMapping("/cars")
  public List<Car> getCars() {
    return carService.getCars();
  }

  @PostMapping("/cars")
  public Car postCar(@RequestBody Car car) {
    return carService.postCar(car);
  }
}
