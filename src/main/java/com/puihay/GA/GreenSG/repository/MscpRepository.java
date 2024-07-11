package com.puihay.GA.GreenSG.repository;

import java.util.List;

import com.puihay.GA.GreenSG.entities.Mscp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MscpRepository extends JpaRepository<Mscp, Long> {
  Mscp findByPostal(Integer postal);

  List<Mscp> findByStreetContainingIgnoreCaseOrBlockContainingIgnoreCaseOrSpostalStartsWith(String street, String block,
      String spostal);

  Mscp findBySpot1(String carplate);

  Mscp findBySpot2(String carplate);

  Mscp findBySpot3(String carplate);

  Mscp findBySpot4(String carplate);

}
