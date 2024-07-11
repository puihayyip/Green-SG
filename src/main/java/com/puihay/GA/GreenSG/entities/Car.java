package com.puihay.GA.GreenSG.entities;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "car")
public class Car {

  @Id
  @Column(name = "car_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @JsonIgnore
  private Long car_id;

  @NonNull
  @Column(name = "carplate_number")
  private String carplate;

  @NonNull
  @Column(name = "location")
  private Integer location;

  @Column(name = "start_time")
  private LocalTime startTime;

  @Column(name = "end_time")
  private LocalTime endTime;

  public Car() {
  }

  public Car(String carplate, Integer location, LocalTime startTime, LocalTime endTime) {
    this.carplate = carplate;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public Long getId() {
    return car_id;
  }

  public void setId(Long car_id) {
    this.car_id = car_id;
  }

  public String getCarplate() {
    return carplate;
  }

  public void setCarplate(String carplate) {
    this.carplate = carplate;
  }

  public Integer getLocation() {
    return location;
  }

  public void setLocation(Integer location) {
    this.location = location;
  }

  public LocalTime getStartTime() {
    return startTime;
  }

  public void setStartTime(LocalTime startTime) {
    this.startTime = startTime;
  }

  public LocalTime getEndTime() {
    return endTime;
  }

  public void setEndTime(LocalTime endTime) {
    this.endTime = endTime;
  }

  @Override
  public String toString() {
    return "Car [carplate=" + carplate + ", endTime=" + endTime + ", id=" + car_id + ", location=" + location
        + ", startTime=" + startTime + "]";
  }

}
