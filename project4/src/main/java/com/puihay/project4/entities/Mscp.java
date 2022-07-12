package com.puihay.project4.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mscp")
public class Mscp {

  @Id
  @Column(name = "mscp_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  public Long id;

  @Column(name = "block")
  public String block;

  @Column(name = "street")
  public String street;

  @Column(name = "postal")
  public Integer postal;

  public Mscp() {
  }

  public Mscp(String block, String street, Integer postal) {
    this.block = block;
    this.street = street;
    this.postal = postal;
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

  @Override
  public String toString() {
    return "Mscp [block=" + block + ", id=" + id + ", postal=" + postal + ", street=" + street + "]";
  }

}
