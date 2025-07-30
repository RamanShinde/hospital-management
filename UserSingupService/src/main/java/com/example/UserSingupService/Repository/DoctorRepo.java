package com.example.UserSingupService.Repository;

import com.example.UserSingupService.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor,Integer> {

}
