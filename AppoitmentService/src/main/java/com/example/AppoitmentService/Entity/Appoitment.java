package com.example.AppoitmentService.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Appoitment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AppointmentId;
    private String PatientName;
    private int doctorId;
    private String DoctorName;
    private String Date;
    private String Status;
}
