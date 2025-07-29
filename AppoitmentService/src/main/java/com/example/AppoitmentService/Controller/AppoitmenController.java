package com.example.AppoitmentService.Controller;

import com.example.AppoitmentService.Entity.Appoitment;
import com.example.AppoitmentService.Entity.Doctor;
import com.example.AppoitmentService.Service.AppoitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://hospital‑frontend‑y4d0.onrender.com"
})
@RestController
@RequestMapping("Appoitment")
public class AppoitmenController {
    @Autowired
    AppoitmentService service;

    @Autowired
    RestTemplate template;

    @GetMapping("Msg")
    public String getMsg() {
        return "Hi everyone";
    }

    @GetMapping("/GetAllAppoitment")
    public List<Appoitment> getAll(){
        return service.getAll();
    }
    @GetMapping("/GetAllDoc")
    public List<Doctor> getAllDoctor(){
        Doctor[] doctors=template.getForObject("http://localhost:8080/Doctor/get-doctor", Doctor[].class);
        return Arrays.asList(doctors);
    }
    @PostMapping("AddAppoitment/{id}")
    public String addAppoitment(@RequestBody Appoitment appoitment,@PathVariable int id){
        Doctor doctor=template.getForObject("https://your-doctor-service.onrender.com/Doctor/GetDoctor/"+id, Doctor.class);
//        Doctor doctor = new Doctor();
//        doctor.setAvailable(true);
        if(doctor.isAvailable()){
            service.addAppoitment(appoitment);
            return "Confirmed";
        }
        return "Failed";
    }
    @DeleteMapping("Delete/{id}")
    public String deleteAppoitment(@PathVariable int id){
        service.deleteAppoitment(id);
        return "Delete successfully!!";
    }

    @PutMapping("Update/{id}")
    public String updateAppoitment(@PathVariable int id,@RequestBody Appoitment appoitment){
        service.updateAppoitment(id,appoitment);
        return "Update successfully!!";
    }
    @GetMapping("getAppotmentByDoctorId/{id}")
    public List<Appoitment> getAppotmentByDoctorId(@PathVariable int id){
        return service.getAppoitmentByDoctorId(id);
    }
}