package com.puihay.GA.GreenSG.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.puihay.GA.GreenSG.entities.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

  Car findByCarplate(String carplate);

  List<Car> findByLocation(int location);

}
