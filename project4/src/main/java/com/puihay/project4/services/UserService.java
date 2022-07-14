package com.puihay.project4.services;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.puihay.project4.entities.Car;
import com.puihay.project4.entities.LoginForm;
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

  public Optional<User> getSingleUser(Long id) {
    return userRepository.findById(id);
  }

  public User book(Long userId, Long carId) {
    User theUser = userRepository.findById(userId).get();
    Car theCar = carRepository.findById(carId).get();
    LocalTime localTime = LocalTime.now();
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

  public User end(Long userId, int mscpPostal) {
    User theUser = userRepository.findById(userId).get();
    Mscp theMscp = mscpRepository.findByPostal(mscpPostal);
    Car theCar = theUser.getCar();
    String theCarPlate = theCar.getCarplate();
    LocalTime localTime = LocalTime.now();

    if (theMscp.getSpot1() == null) {
      theMscp.setSpot1(theCarPlate);
    } else {
      if (theMscp.getSpot2() == null) {
        theMscp.setSpot2(theCarPlate);
      } else {
        if (theMscp.getSpot3() == null) {
          theMscp.setSpot3(theCarPlate);
        } else {
          if (theMscp.getSpot4() == null) {
            theMscp.setSpot4(theCarPlate);
          }
        }
      }
    }

    theCar.setEndTime(localTime);
    theCar.setLocation(mscpPostal);
    theUser.setCar(null);

    int timeDiff = difference(theCar.getStartTime(), theCar.getEndTime());
    double rentalFee = 0.42;
    System.out.println(timeDiff * rentalFee);
    userRepository.save(theUser);
    mscpRepository.save(theMscp);
    carRepository.save(theCar);
    return theUser;
  }

  private static int difference(LocalTime start, LocalTime stop) {
    int diffMinutes = (start.getMinute() - stop.getMinute());
    int diffHours = (start.getHour() - stop.getHour()) * 60;
    int diff = diffHours + diffMinutes;
    return -diff;
  }

  public ResponseEntity<?> postUser(User user) {
    List<User> theUser = userRepository.findByEmailOrUsername(user.getEmail(), user.getUsername());
    if (theUser.size() == 0) {
      return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(null, HttpStatus.CONFLICT);
    }
  }

  public ResponseEntity<?> login(LoginForm loginForm) {
    String thePassword = loginForm.getPassword();
    String theEmail = loginForm.getEmail();
    String theUsername = loginForm.getUsername();
    List<User> theUser;
    try {
      theUser = userRepository.findByEmailOrUsername(theEmail, theUsername);
      if (theUser.size() == 1 && theUser.get(0).getPassword().equals(thePassword)) {
        System.out.println("\n" + "Logged in" + "\n");
        return new ResponseEntity<>(theUser.get(0), HttpStatus.OK);
      } else {
        System.out.println("\n" + "Not authorized" + "\n");
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
      }
    } catch (Exception e) {
      System.out.println("\n" + e + "\n");
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
  }
}
