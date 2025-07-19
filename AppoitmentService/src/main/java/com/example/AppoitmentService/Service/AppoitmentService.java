package com.example.AppoitmentService.Service;

import com.example.AppoitmentService.Entity.Appoitment;
import com.example.AppoitmentService.Repository.AppoitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppoitmentService {
    @Autowired
    AppoitmentRepository repository;

    public List<Appoitment> getAll() {
        return  repository.findAll();
    }

    public void addAppoitment(Appoitment appoitment) {
        repository.save(appoitment);
    }

    public void deleteAppoitment(int id) {
        Appoitment appoitment=repository.findById(id).orElseThrow(()->new RuntimeException("User not found!!"));
        repository.delete(appoitment);
    }

    public void updateAppoitment(int id, Appoitment appoitment) {
         Appoitment extingAppoitment=repository.findById(id).orElseThrow(()->new RuntimeException("User not found!!"));
         extingAppoitment.setPatientName(appoitment.getPatientName());
         extingAppoitment.setDoctorName(appoitment.getDoctorName());
         extingAppoitment.setDate(appoitment.getDate());
         extingAppoitment.setStatus(appoitment.getStatus());
         repository.save(extingAppoitment);
    }

    public List<Appoitment>getAppoitmentByDoctorId(int id){
        return  repository.getAppotmentByDoctorId(id);
    }
}