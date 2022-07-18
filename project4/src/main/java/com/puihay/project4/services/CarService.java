package com.puihay.project4.services;

import java.time.LocalTime;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.puihay.project4.entities.Car;
import com.puihay.project4.repository.CarRepository;

@Service
public class CarService {

  @Autowired
  CarRepository carRepository;

  public CarService() {
  }

  public List<Car> getCars() {
    return carRepository.findAll();
  }

  public Car postCar(Car car) {
    return carRepository.save(car);
  }

  public Car getCar(String carplate) {
    return carRepository.findByCarplate(carplate);
  }

  public List<Car> carSeed() {
    carRepository.deleteAll();
    carRepository.save(new Car("SJK8831Z", 0, LocalTime.parse("21:00:00"), null));
    carRepository.save(new Car(randomCarplate(), 531576, null, null));
    carRepository.save(new Car(randomCarplate(), 531576, null, null));
    carRepository.save(new Car(randomCarplate(), 531576, null, null));
    carRepository.save(new Car("SOX2390C", 0, LocalTime.parse("12:00:00"), null));
    carRepository.save(new Car(randomCarplate(), 670636, null, null));
    carRepository.save(new Car(randomCarplate(), 670636, null, null));
    carRepository.save(new Car(randomCarplate(), 570282, null, null));
    carRepository.save(new Car(randomCarplate(), 160126, null, null));
    carRepository.save(new Car(randomCarplate(), 160126, null, null));
    carRepository.save(new Car(randomCarplate(), 760773, null, null));
    carRepository.save(new Car(randomCarplate(), 760773, null, null));
    carRepository.save(new Car(randomCarplate(), 760773, null, null));
    carRepository.save(new Car(randomCarplate(), 760773, null, null));
    carRepository.save(new Car(randomCarplate(), 238839, null, null));
    carRepository.save(new Car(randomCarplate(), 238839, null, null));
    carRepository.save(new Car(randomCarplate(), 588179, null, null));
    carRepository.save(new Car(randomCarplate(), 520155, null, null));
    carRepository.save(new Car(randomCarplate(), 520155, null, null));
    carRepository.save(new Car(randomCarplate(), 820650, null, null));
    carRepository.save(new Car(randomCarplate(), 671541, null, null));
    carRepository.save(new Car(randomCarplate(), 671541, null, null));
    carRepository.save(new Car(randomCarplate(), 671541, null, null));
    carRepository.save(new Car(randomCarplate(), 98537, null, null));
    carRepository.save(new Car(randomCarplate(), 98537, null, null));
    carRepository.save(new Car(randomCarplate(), 271005, null, null));
    carRepository.save(new Car(randomCarplate(), 760855, null, null));
    carRepository.save(new Car(randomCarplate(), 760855, null, null));
    carRepository.save(new Car(randomCarplate(), 543323, null, null));
    carRepository.save(new Car(randomCarplate(), 543323, null, null));
    carRepository.save(new Car(randomCarplate(), 731358, null, null));
    carRepository.save(new Car(randomCarplate(), 731358, null, null));
    carRepository.save(new Car(randomCarplate(), 731358, null, null));
    carRepository.save(new Car(randomCarplate(), 731358, null, null));
    carRepository.save(new Car(randomCarplate(), 640986, null, null));
    carRepository.save(new Car(randomCarplate(), 640986, null, null));
    carRepository.save(new Car(randomCarplate(), 600116, null, null));
    carRepository.save(new Car(randomCarplate(), 600116, null, null));
    carRepository.save(new Car(randomCarplate(), 600116, null, null));
    carRepository.save(new Car(randomCarplate(), 530524, null, null));

    return carRepository.findAll();
  }

  private String randomCarplate() {
    String carplate = "S";
    Random random = new Random();

    for (int i = 0; i < 2; i++) {
      Integer randomAlpha = random.nextInt(26);
      char letter = 'A';
      switch (randomAlpha) {
        case 0:
          letter = 'A';
          break;
        case 1:
          letter = 'B';
          break;
        case 2:
          letter = 'C';
          break;
        case 3:
          letter = 'D';
          break;
        case 4:
          letter = 'E';
          break;
        case 5:
          letter = 'F';
          break;
        case 6:
          letter = 'G';
          break;
        case 7:
          letter = 'H';
          break;
        case 8:
          letter = 'I';
          break;
        case 9:
          letter = 'J';
          break;
        case 10:
          letter = 'K';
          break;
        case 11:
          letter = 'L';
          break;
        case 12:
          letter = 'M';
          break;
        case 13:
          letter = 'N';
          break;
        case 14:
          letter = 'O';
          break;
        case 15:
          letter = 'P';
          break;
        case 16:
          letter = 'Q';
          break;
        case 17:
          letter = 'R';
          break;
        case 18:
          letter = 'S';
          break;
        case 19:
          letter = 'T';
          break;
        case 20:
          letter = 'U';
          break;
        case 21:
          letter = 'V';
          break;
        case 22:
          letter = 'W';
          break;
        case 23:
          letter = 'X';
          break;
        case 24:
          letter = 'Y';
          break;
        case 25:
          letter = 'Z';
          break;
      }
      carplate += letter;
    }
    for (int i = 0; i < 4; i++) {
      Integer randomNum = random.nextInt(10);
      carplate += randomNum.toString();
    }
    Integer randomAlpha = random.nextInt(26);
    char letter = 'A';
    switch (randomAlpha) {
      case 0:
        letter = 'A';
        break;
      case 1:
        letter = 'B';
        break;
      case 2:
        letter = 'C';
        break;
      case 3:
        letter = 'D';
        break;
      case 4:
        letter = 'E';
        break;
      case 5:
        letter = 'F';
        break;
      case 6:
        letter = 'G';
        break;
      case 7:
        letter = 'H';
        break;
      case 8:
        letter = 'I';
        break;
      case 9:
        letter = 'J';
        break;
      case 10:
        letter = 'K';
        break;
      case 11:
        letter = 'L';
        break;
      case 12:
        letter = 'M';
        break;
      case 13:
        letter = 'N';
        break;
      case 14:
        letter = 'O';
        break;
      case 15:
        letter = 'P';
        break;
      case 16:
        letter = 'Q';
        break;
      case 17:
        letter = 'R';
        break;
      case 18:
        letter = 'S';
        break;
      case 19:
        letter = 'T';
        break;
      case 20:
        letter = 'U';
        break;
      case 21:
        letter = 'V';
        break;
      case 22:
        letter = 'W';
        break;
      case 23:
        letter = 'X';
        break;
      case 24:
        letter = 'Y';
        break;
      case 25:
        letter = 'Z';
        break;
    }
    carplate += letter;

    return carplate;
  }
}
