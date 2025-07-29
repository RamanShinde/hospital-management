package com.example.HospitalManagmentSystem.Controller;

import java.util.List;

import com.example.HospitalManagmentSystem.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.HospitalManagmentSystem.Entity.Patient;
import com.example.HospitalManagmentSystem.Service.PatientService;
import com.example.HospitalManagmentSystem.Entity.Doctor;


@CrossOrigin(origins = {
		"http://localhost:4200",
		"https://hospital-frontend-1lgf.onrender.com"
})
@RequestMapping("/Patient")
@RestController
public class PatinetContoller {
	@Autowired
	PatientService service;
	
	@GetMapping
    public String getmessage() {
    	return "Welcome to the hms";
    }
	
//	@PostMapping("add-patient")
//	public String addPatient(@RequestBody Patient patient) {
//		service.addPatient(patient);
//		return "Patient Add succeffuly!!";
//	}
@Autowired
private DoctorRepo doctorRepo;

	@PostMapping("add-patient")
	public String addPatient(@RequestBody Patient patient) {
		// extract doctor id
		int doctorId = patient.getDoctor().getDid();

		// fetch actual doctor from DB
		Doctor existingDoctor = doctorRepo.findById(doctorId)
				.orElseThrow(() -> new RuntimeException("Doctor not found"));

		// assign the full doctor to patient
		patient.setDoctor(existingDoctor);

		// now save
		service.addPatient(patient);
		return "Patient Add successfully!!";
	}

	@GetMapping("get-patient")
	public List<Patient> getAllPatient(){
		return service.getAllPatient();
	}
	
	@DeleteMapping("delete-{pid}")
	public String deletePatient(@PathVariable int pid) {
		service.deletePatient(pid);
		return "delete successfully!!";
	}

	@PutMapping("update-{pid}")
	public String updatePatient(@PathVariable int pid,@RequestBody Patient patient) {
		service.updatePatient(pid,patient);
		return "update successfully!!";
	}
}
