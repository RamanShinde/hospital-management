package com.example.HospitalManagmentSystem.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

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

   @ManyToOne
   @JoinColumn(name = "dept_id")
   @JsonIgnoreProperties("doctor")
   private Department department;

   @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
   @JsonIgnoreProperties("doctor")
   private List<Patient> patient;
}