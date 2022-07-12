package com.puihay.project4.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "users")
public class User {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @JsonIgnore
  private Long id;

  @Column(name = "username")
  @NonNull
  private String username;

  @NonNull
  @Column(name = "first_name")
  private String firstName;

  @NonNull
  @Column(name = "last_name")
  private String lastName;

  @NonNull
  @Column(name = "email")
  private String email;

  @NonNull
  @Column(name = "password")
  private String password;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "car_id")
  private Car car;

  public User() {
  }

  public User(String username, String firstName, String lastName, String email, String password) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  public User(String username, String firstName, String lastName, String email, String password, Car car) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.car = car;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public String toString() {
    return "User [email=" + email + ", firstName=" + firstName + ", id=" + id + ", lastName=" + lastName + ", password="
        + password + ", username=" + username + "]";
  }

  public Car getCar() {
    return car;
  }

  public void setCar(Car car) {
    this.car = car;
  }

}
