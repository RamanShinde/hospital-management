package com.example.UserSingupService.Controller;

import com.example.UserSingupService.Entity.Doctor;
import com.example.UserSingupService.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("Doctor")
public class DoctorController {
    @Autowired
    DoctorService doctorService;

    @GetMapping
    public String getMesg(){
        return "Welcome to doctor";
    }
    @GetMapping("AllDoctor")
    public List<Doctor> getAllDocotor(){
       return  doctorService.getAllDoctor();
    }

    
}
