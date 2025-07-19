package com.example.AppoitmentService.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Doctor {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int did;

   @Column(nullable = false)
   private String doctorname;

   @Column(nullable = false)
   private String specilization;

   @Column(nullable = false)
   private Long phonenumber;

   private boolean available;

//   @ManyToOne
//   @JoinColumn(name = "dept_id")
//   @JsonIgnoreProperties("doctor")
//   private Department department;
//
//   @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
//   @JsonIgnoreProperties("doctor")
//   private List<Patient> patient;
}