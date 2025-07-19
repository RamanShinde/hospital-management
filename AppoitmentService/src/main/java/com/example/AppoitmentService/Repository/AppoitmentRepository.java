package com.example.AppoitmentService.Repository;

import com.example.AppoitmentService.Entity.Appoitment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppoitmentRepository extends JpaRepository<Appoitment,Integer> {

    List<Appoitment> getAppotmentByDoctorId(int doctorId);
}