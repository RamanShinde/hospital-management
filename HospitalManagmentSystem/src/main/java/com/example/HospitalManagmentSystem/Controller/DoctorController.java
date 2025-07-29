package com.example.HospitalManagmentSystem.Controller;

import com.example.HospitalManagmentSystem.Entity.Doctor;
import com.example.HospitalManagmentSystem.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://hospital-frontend-1lgf.onrender.com"
})
@RestController
@RequestMapping("/Doctor")
public class DoctorController {
    @GetMapping
    public String getMessage() {
        return "Welcome to doctorDashboard!!";
    }

    @Autowired
    DoctorService service;

    @PostMapping("/add-doctor")
    public String addDoctor(@RequestBody Doctor doctor) {
        service.addDoctor(doctor);
        return "Doctor add successfully!!";
    }

    @GetMapping("/get-doctor")
    public List<Doctor> getAllDoctor() {
        return service.getAllDoctor();
    }

    @DeleteMapping("/delete-{id}")
    public String deleteDoctor(@PathVariable int id) {
        service.deleteDoctot(id);
        return "Delete successfully!!";
    }

    @PutMapping("update-{id}")
    public String updateDoctor(@PathVariable int id, @RequestBody Doctor doctor) {
        service.updateDoctor(id, doctor);
        return "Update successfully!!";
    }

    @GetMapping("GetDoctor/{id}")
    public Doctor getDoctor(@PathVariable int id) {
        return service.getDoctor(id);
    }
    @PutMapping("{did}/Avialability")
    public ResponseEntity<String> setAvailability(@PathVariable int did, @RequestParam boolean available){
        service.setAvailability(did,available);
        return ResponseEntity.ok("Availability updated");
    }
}