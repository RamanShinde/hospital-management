package com.example.HospitalManagmentSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HospitalManagmentSystem.Entity.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor,Integer> {


}
