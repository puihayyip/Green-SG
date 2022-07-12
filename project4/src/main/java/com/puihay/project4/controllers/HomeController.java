package com.puihay.project4.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {

  @GetMapping("/sayhello")
  public String sayHello() {
    return "Hello spring controller";
  }

}
