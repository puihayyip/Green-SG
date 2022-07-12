package com.puihay.project4.services;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.puihay.project4.entities.Car;
import com.puihay.project4.entities.Mscp;
import com.puihay.project4.entities.User;
import com.puihay.project4.repository.CarRepository;
import com.puihay.project4.repository.MscpRepository;
import com.puihay.project4.repository.UserRepository;

@Service
public class UserService {

  @Autowired
  UserRepository userRepository;
  @Autowired
  CarRepository carRepository;
  @Autowired
  MscpRepository mscpRepository;

  public UserService() {
  }

  public List<User> getUsers() {
    return userRepository.findAll();
  }

  public User postUser(User user) {
    return userRepository.save(user);
  }

  public Optional<User> getSingleUser(Long id) {
    return userRepository.findById(id);
  }

  public User book(Long userId, Long carId) {
    User theUser = userRepository.findById(userId).get();
    Car theCar = carRepository.findById(carId).get();
    LocalTime localTime = LocalTime.now();
    // Integer thePostal = theCar.getLocation();
    // Mscp theMscp = mscpRepository.findByPostal(thePostal);
    String theCarplate = theCar.getCarplate();

    Mscp theMscp;
    theMscp = mscpRepository.findBySpot1(theCarplate);
    if (theMscp == null) {
      theMscp = mscpRepository.findBySpot2(theCarplate);
      if (theMscp == null) {
        theMscp = mscpRepository.findBySpot3(theCarplate);
        if (theMscp == null) {
          theMscp = mscpRepository.findBySpot4(theCarplate);
          if (theMscp != null) {
            theMscp.setSpot4(null);
          }
        } else {
          theMscp.setSpot3(null);
        }
      } else {
        theMscp.setSpot2(null);
      }
    } else {
      theMscp.setSpot1(null);
    }

    theCar.setStartTime(localTime);
    theCar.setLocation(0);
    theUser.setCar(theCar);
    userRepository.save(theUser);
    carRepository.save(theCar);
    mscpRepository.save(theMscp);
    return theUser;
  }
}
