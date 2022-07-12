package com.puihay.project4.entities;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "car")
public class Car {

  @Id
  @Column(name = "car_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @JsonIgnore
  public Long id;

  @Column(name = "carplate_number")
  public String carplate;

  @Column(name = "location")
  public Integer location;

  @Column(name = "rider")
  public String rider;

  @Column(name = "start_time")
  public Time startTime;

  @Column(name = "end_time")
  public Time endTime;

  public Car() {
  }

  public Car(String carplate, Integer location, String rider, Time startTime,
      Time endTime) {
    this.carplate = carplate;
    this.location = location;
    this.rider = rider;
    this.startTime = startTime;
    this.endTime = endTime;
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
    return "Car [carplate=" + carplate + ", endTime=" + endTime + ", id=" + id +
        ", location=" + location + ", rider="
        + rider + ", startTime=" + startTime + "]";
  }

  public Integer getLocation() {
    return location;
  }

  public void setLocation(Integer location) {
    this.location = location;
  }

  public String getRider() {
    return rider;
  }

  public void setRider(String rider) {
    this.rider = rider;
  }

  public Time getStartTime() {
    return startTime;
  }

  public void setStartTime(Time startTime) {
    this.startTime = startTime;
  }

  public Time getEndTime() {
    return endTime;
  }

  public void setEndTime(Time endTime) {
    this.endTime = endTime;
  }

}
