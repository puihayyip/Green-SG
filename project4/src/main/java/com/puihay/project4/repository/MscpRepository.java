package com.puihay.project4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.puihay.project4.entities.Mscp;

@Repository
public interface MscpRepository extends JpaRepository<Mscp, Long> {
  Mscp findByPostal(Integer postal);

  List<Mscp> findByStreetContainingIgnoreCaseOrBlockContainingIgnoreCaseOrPostalStartsWith(String street, String block, String postal);

  Mscp findBySpot1(String carplate);

  Mscp findBySpot2(String carplate);

  Mscp findBySpot3(String carplate);

  Mscp findBySpot4(String carplate);

}
