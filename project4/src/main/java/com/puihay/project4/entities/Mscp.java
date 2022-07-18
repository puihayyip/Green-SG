package com.puihay.project4.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "mscp")
public class Mscp {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @JsonIgnore
  private Long id;

  @NonNull
  @Column(name = "block")
  private String block;

  @NonNull
  @Column(name = "street")
  private String street;

  @NonNull
  @Column(name = "postal")
  private Integer postal;

  @NonNull
  @Column(name = "spostal")
  private String spostal;

  @Column(name = "spot1")
  private String spot1;

  @Column(name = "spot2")
  private String spot2;

  @Column(name = "spot3")
  private String spot3;

  @Column(name = "spot4")
  private String spot4;

  @Column(name = "latitude")
  private double latitude;

  @Column(name = "longtitude")
  private double longtitude;

  public Mscp() {
  }

  public Mscp(String block, String street, Integer postal, String sportal, String spot1, String spot2, String spot3,
      String spot4,
      double latitude, double longtitude) {
    this.block = block;
    this.street = street;
    this.postal = postal;
    this.spostal = postal.toString();
    this.spot1 = spot1;
    this.spot2 = spot2;
    this.spot3 = spot3;
    this.spot4 = spot4;
    this.latitude = latitude;
    this.longtitude = longtitude;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getBlock() {
    return block;
  }

  public void setBlock(String block) {
    this.block = block;
  }

  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public Integer getPostal() {
    return postal;
  }

  public void setPostal(Integer postal) {
    this.postal = postal;
  }

  public String getSpot1() {
    return spot1;
  }

  public void setSpot1(String spot1) {
    this.spot1 = spot1;
  }

  public String getSpot2() {
    return spot2;
  }

  public void setSpot2(String spot2) {
    this.spot2 = spot2;
  }

  public String getSpot3() {
    return spot3;
  }

  public void setSpot3(String spot3) {
    this.spot3 = spot3;
  }

  public String getSpot4() {
    return spot4;
  }

  public void setSpot4(String spot4) {
    this.spot4 = spot4;
  }

  public double getLatitude() {
    return latitude;
  }

  public void setLatitude(double latitude) {
    this.latitude = latitude;
  }

  public double getLongtitude() {
    return longtitude;
  }

  public void setLongtitude(double longtitude) {
    this.longtitude = longtitude;
  }

  public String getSpostal() {
    return spostal;
  }

  public void setSpostal(String spostal) {
    this.spostal = spostal;
  }

  public String toString() {
    return "Mscp [block=" + block + ", id=" + id + ", latitude=" + latitude + ", longtitude=" + longtitude + ", postal="
        + postal + ", spot1=" + spot1 + ", spot2=" + spot2 + ", spot3=" + spot3 + ", spot4=" + spot4 + ", street="
        + street + "]";
  }

}
