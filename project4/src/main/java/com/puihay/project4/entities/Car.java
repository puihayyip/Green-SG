package com.puihay.project4.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "car")
public class Car {

  @Id
  @Column(name = "car")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  public Long id;

  @Column(name = "carplate_number")
  public String carplate;

  // rider

  // mscp

  public Car() {
  }

  public Car(String carplate) {
    this.carplate = carplate;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCarplate() {
    return carplate;
  }

  public void setCarplate(String carplate) {
    this.carplate = carplate;
  }

  @Override
  public String toString() {
    return "Car [carplate=" + carplate + ", id=" + id + "]";
  }

}
