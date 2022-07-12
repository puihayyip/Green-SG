package com.puihay.project4.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.puihay.project4.entities.Mscp;
import com.puihay.project4.repository.MscpRepository;

@Service
public class MscpService {

  @Autowired
  MscpRepository mscpRepository;

  public MscpService() {
  }

  public List<Mscp> getMscps() {
    return mscpRepository.findAll();
  }

  public Mscp postMscp(Mscp mscp) {
    return mscpRepository.save(mscp);
  }
}
