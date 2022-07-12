package com.puihay.project4.entities;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "car")
public class Car {

  @Id
  @Column(name = "car_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @JsonIgnore
  private Long id;

  @NonNull
  @Column(name = "carplate_number")
  private String carplate;

  @NonNull
  @Column(name = "location")
  private Integer location;

  @JsonIgnore
  @OneToOne
  @JoinColumn(name = "car_id")
  private User user;

  @Column(name = "start_time")
  private Time startTime;

  @Column(name = "end_time")
  private Time endTime;

  public Car() {
  }

  public Car(String carplate, Integer location, User user, Time startTime, Time endTime) {
    this.carplate = carplate;
    this.location = location;
    this.user = user;
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

  public Integer getLocation() {
    return location;
  }

  public void setLocation(Integer location) {
    this.location = location;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
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

  @Override
  public String toString() {
    return "Car [carplate=" + carplate + ", endTime=" + endTime + ", id=" + id + ", location=" + location
        + ", startTime=" + startTime + ", user=" + user + "]";
  }

}
