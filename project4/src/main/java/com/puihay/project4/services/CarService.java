package com.puihay.project4.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.puihay.project4.entities.Car;
import com.puihay.project4.repository.CarRepository;

@Service
public class CarService {

  @Autowired
  CarRepository carRepository;

  public CarService() {
  }

  public List<Car> getCars() {
    return carRepository.findAll();
  }

  public Car postCar(Car car) {
    return carRepository.save(car);
  }
}
