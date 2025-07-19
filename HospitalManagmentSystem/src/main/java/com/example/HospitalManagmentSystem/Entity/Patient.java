package com.example.HospitalManagmentSystem.Entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	@Column(nullable = false)
    private String patinetname;
	@Column(nullable = false)
    private int age;
	@Column(nullable = false)
    private String gender;
	@Column(nullable = false)
    private String address;
	@Column(nullable = false)
    private Long phone;
	@Column(nullable = false)
    private LocalDate admittedDate;
	
	@ManyToOne
	@JoinColumn(name = "doctor_id", nullable = false)
	@JsonIgnoreProperties("patient")
	private Doctor doctor;
}
