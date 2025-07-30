package com.example.UserSingupService.Service;

import com.example.UserSingupService.Entity.Doctor;
import com.example.UserSingupService.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    DoctorRepo doctorRepo;

    public List<Doctor> getAllDoctor() {
        return doctorRepo.findAll();
    }
}
