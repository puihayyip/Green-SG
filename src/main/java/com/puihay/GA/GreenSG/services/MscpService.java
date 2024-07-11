package com.puihay.GA.GreenSG.services;

import java.util.List;

import com.puihay.GA.GreenSG.entities.Mscp;
import com.puihay.GA.GreenSG.repository.CarRepository;
import com.puihay.GA.GreenSG.repository.MscpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.puihay.GA.GreenSG.entities.Car;

@Service
public class MscpService {

  @Autowired
  MscpRepository mscpRepository;
  @Autowired
  CarRepository carRepository;

  public MscpService() {
  }

  public List<Mscp> getMscps() {
    return mscpRepository.findAll();
  }

  public Mscp postMscp(Mscp mscp) {
    return mscpRepository.save(mscp);
  }

  public List<Mscp> search(String field) {
    return mscpRepository.findByStreetContainingIgnoreCaseOrBlockContainingIgnoreCaseOrSpostalStartsWith(field,
        field, field);
  }

  public List<Mscp> mscpSeed() {
    mscpRepository.deleteAll();

    mscpRepository
        .save(new Mscp("576A", "Hougang Ave 4", 531576, "531576", getCarplate(531576, 0),
            getCarplate(531576, 1),
            getCarplate(531576, 2), getCarplate(531576, 3), 1.3790597547875285, 103.88602959035836));
    mscpRepository
        .save(new Mscp("636", "Senja Road", 670636, "670636", getCarplate(670636, 0), getCarplate(670636, 1),
            getCarplate(670636, 2), getCarplate(670636, 3), 1.3869760856324906, 103.75834240078169));
    mscpRepository
        .save(new Mscp("126", "Kim Tiam Road", 160126, "160126", getCarplate(160126, 0), getCarplate(160126, 1),
            getCarplate(160126, 2), getCarplate(160126, 3), 1.282537896113466, 103.8294972151781));
    mscpRepository
        .save(new Mscp("282", "Bishan Street 22", 570282, "570282", getCarplate(570282, 0),
            getCarplate(570282, 1),
            getCarplate(570282, 2), getCarplate(570282, 3), 1.359043179540605, 103.8446510020644));
    mscpRepository
        .save(new Mscp("773", "Yishun Avenue 3", 760773, "760773", getCarplate(760773, 0),
            getCarplate(760773, 1),
            getCarplate(760773, 2), getCarplate(760773, 3), 1.4239933520080779, 103.83277183327));
    mscpRepository
        .save(new Mscp("68", "Orchard Road", 238839, "238839", getCarplate(238839, 0), getCarplate(238839, 1),
            getCarplate(238839, 2), getCarplate(238839, 3), 1.30187405796420, 103.84528225515272));
    mscpRepository
        .save(new Mscp("170", "Upper Bukit Timah Road", 588179, "588179", getCarplate(588179, 0),
            getCarplate(588179, 1),
            getCarplate(588179, 2), getCarplate(588179, 3), 1.3443085606141671,
            103.77574717187827));
    mscpRepository
        .save(new Mscp("155", "Simei Road", 520155, "520155", getCarplate(520155, 0), getCarplate(520155, 1),
            getCarplate(520155, 2), getCarplate(520155, 3), 1.3455660414577522, 103.95839200241817));
    mscpRepository
        .save(new Mscp("650", "Punggol Central", 820650, "820650", getCarplate(820650, 0),
            getCarplate(820650, 1),
            getCarplate(820650, 2), getCarplate(820650, 3), 1.3978391654943176, 103.91537466501215));
    mscpRepository
        .save(new Mscp("257A", "Pasir Ris Street 21", 515257, "515257", getCarplate(515257, 0),
            getCarplate(515257, 1),
            getCarplate(515257, 2), getCarplate(515257, 3), 1.3689949686648988, 103.96274217306028));
    mscpRepository
        .save(new Mscp("320", "Shunfu Road", 570320, "570320", getCarplate(570320, 0), getCarplate(570320, 1),
            getCarplate(570320, 2), getCarplate(570320, 3), 1.3529200342111503, 103.83694341228372));
    mscpRepository
        .save(new Mscp("524", "Hougang Ave 6", 530524, "530524", getCarplate(530524, 0), getCarplate(530524, 1),
            getCarplate(530524, 2), getCarplate(530524, 3), 1.3751185418978462, 103.89080541327239));
    mscpRepository
        .save(new Mscp("116", "Jurong East Street 13", 600116, "600116", getCarplate(600116, 0),
            getCarplate(600116, 1),
            getCarplate(600116, 2), getCarplate(600116, 3), 1.3404581856076383, 103.73459183345581));
    mscpRepository
        .save(new Mscp("986", "Jurong West Street 93", 640986, "640986", getCarplate(640986, 0),
            getCarplate(640986, 1),
            getCarplate(640986, 2), getCarplate(640986, 3), 1.3379068975947601, 103.69469166542449));
    mscpRepository
        .save(new Mscp("358A", "Woodlands Avenue 5", 731358, "731358", getCarplate(731358, 0),
            getCarplate(731358, 1),
            getCarplate(731358, 2), getCarplate(731358, 3), 1.4340074973187484, 103.78382517024738));
    mscpRepository
        .save(new Mscp("855", "Yishun Ring Road", 760855, "760855", getCarplate(760855, 0),
            getCarplate(760855, 1),
            getCarplate(760855, 2), getCarplate(760855, 3), 1.4183100374602229, 103.83650525730681));
    mscpRepository
        .save(new Mscp("323", "Sengkang East Way", 543323, "543323", getCarplate(543323, 0),
            getCarplate(543323, 1),
            getCarplate(543323, 2), getCarplate(543323, 3), 1.394462731453886, 103.8921101716576));
    mscpRepository
        .save(new Mscp("5A", "Holland Close", 271005, "271005", getCarplate(271005, 0), getCarplate(271005, 1),
            getCarplate(271005, 2), getCarplate(271005, 3), 1.3099922894919782, 103.79580442522591));
    mscpRepository
        .save(new Mscp("1", "Cove Avenue", 98537, "98537", getCarplate(98537, 0), getCarplate(98537, 1),
            getCarplate(98537, 2), getCarplate(98537, 3), 1.2477860264982112, 103.84013374928878));
    mscpRepository
        .save(new Mscp("541A", "Bukit Panjang Ring Road", 671541, "671541", getCarplate(671541, 0),
            getCarplate(671541, 1),
            getCarplate(671541, 2), getCarplate(671541, 3), 1.383184656033701, 103.7627744133711));

    return mscpRepository.findAll();
  }

  private String getCarplate(int location, int position) {
    List<Car> theCar = carRepository.findByLocation(location);
    String carplate = null;
    try {
      carplate = theCar.get(position).getCarplate();
    } catch (Exception e) {

    }
    return carplate;
  }

}
