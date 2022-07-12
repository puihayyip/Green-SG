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
  public Long id;

  @NonNull
  @Column(name = "block")
  public String block;

  @NonNull
  @Column(name = "street")
  public String street;

  @NonNull
  @Column(name = "postal")
  public Integer postal;

  @Column(name = "spot1")
  public String spot1;

  @Column(name = "spot2")
  public String spot2;

  @Column(name = "spot3")
  public String spot3;

  @Column(name = "spot4")
  public String spot4;

  public Mscp() {
  }

  public Mscp(String block, String street, Integer postal, String spot1, String spot2, String spot3, String spot4) {
    this.block = block;
    this.street = street;
    this.postal = postal;
    this.spot1 = spot1;
    this.spot2 = spot2;
    this.spot3 = spot3;
    this.spot4 = spot4;
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

  @Override
  public String toString() {
    return "Mscp [block=" + block + ", id=" + id + ", postal=" + postal + ", spot1=" + spot1 + ", spot2=" + spot2
        + ", spot3=" + spot3 + ", spot4=" + spot4 + ", street=" + street + "]";
  }

}
