package com.example.AuthService.Controller;

import com.example.AuthService.Entity.LoginRequest;
import com.example.AuthService.Entity.User;
import com.example.AuthService.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("User")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("Message")
    public String getMesaage() {
        return "Welcome to authorization Service";
    }

    @GetMapping("GetAllUser")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @PostMapping("SingupUser")
    public String singUp(@RequestBody User user){
        userService.singUp(user);
        return "register Successfully!!!";
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request){
       boolean islogged=userService.login(request.getEmail(),request.getPassword(), request.getRole());
       if(islogged){
           return ResponseEntity.ok("User login");
       }
       else {
           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
       }
    }

}