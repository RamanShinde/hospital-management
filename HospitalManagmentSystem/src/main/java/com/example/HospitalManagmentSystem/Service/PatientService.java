package com.example.HospitalManagmentSystem.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HospitalManagmentSystem.Entity.Patient;
import com.example.HospitalManagmentSystem.Repository.PatientRepo;

@Service
public class PatientService {
	
	@Autowired
	PatientRepo repo;

	public void addPatient(Patient patient) {
		 repo.save(patient);
	}

	public List<Patient> getAllPatient() {
		return repo.findAll();
	}

	public void deletePatient(int pid) {
		 Patient patient=repo.findById(pid).orElseThrow(()-> new RuntimeException("User not found!!"));
		 repo.delete(patient);
	}

	public void updatePatient(int pid,Patient patient) {
		Patient extingPatient=repo.findById(pid).orElseThrow(()->new RuntimeException("user not found"));
		extingPatient.setPatinetname(patient.getPatinetname());
		extingPatient.setAge(patient.getAge());
		extingPatient.setGender(patient.getGender());
		extingPatient.setAddress(patient.getAddress());
		extingPatient.setPhone(patient.getPhone());
		extingPatient.setAdmittedDate(patient.getAdmittedDate());

		repo.save(extingPatient);
 	} 
}
