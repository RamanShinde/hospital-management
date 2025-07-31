package com.example.AuthService.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("User")
public class UserController {
    
 @GetMapping("Message")
 public String getMesaage(){
     return "Welcome to authorization Service";
 }

 public String getUser(){
     return null;
 }









}
