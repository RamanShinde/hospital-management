package com.example.HospitalManagmentSystem.Service;

import com.example.HospitalManagmentSystem.Entity.Department;
import com.example.HospitalManagmentSystem.Entity.Doctor;
import com.example.HospitalManagmentSystem.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    DoctorRepo repo;

    public void addDoctor(Doctor doctor) {
        repo.save(doctor);
    }

    public List<Doctor> getAllDoctor() {
        return repo.findAll();
    }

    public void deleteDoctot(int id) {
        Doctor doctor=repo.findById(id).orElseThrow(()->new RuntimeException("User not found!!"));
        repo.delete(doctor);
    }

    public void updateDoctor(int id, Doctor doctor) {
        Doctor exingtingDoctor=repo.findById(id).orElseThrow(()-> new RuntimeException("User not found!!"));
        exingtingDoctor.setDoctorname(doctor.getDoctorname());
        exingtingDoctor.setPhonenumber(doctor.getPhonenumber());
        exingtingDoctor.setSpecilization(doctor.getSpecilization());
        repo.save(exingtingDoctor);
    }

    public Doctor getDoctor(int id) {
        return repo.findById(id).orElseThrow(()->new RuntimeException("User not found!!"));
    }
}
