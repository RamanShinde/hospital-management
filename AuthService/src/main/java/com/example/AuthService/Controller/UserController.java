package com.example.AuthService.Controller;

import com.example.AuthService.Entity.User;
import com.example.AuthService.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("Login/{email}/{password}/{role}")
    public ResponseEntity<String>  login(@PathVariable String email,@PathVariable String password,@PathVariable String role){
       boolean islogged=userService.login(email,password,role);
       return ResponseEntity.ok("User login");
    }

}