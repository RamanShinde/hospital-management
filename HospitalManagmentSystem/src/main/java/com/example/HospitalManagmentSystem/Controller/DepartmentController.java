package com.example.HospitalManagmentSystem.Controller;

import com.example.HospitalManagmentSystem.Entity.Department;
import com.example.HospitalManagmentSystem.Entity.Doctor;
import com.example.HospitalManagmentSystem.Service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = {
		"http://localhost:4200",
		"https://hospital-frontend-y4d0.onrender.com"
})
@RestController
@RequestMapping("/Department")
public class DepartmentController {
	@Autowired
	DepartmentService service;

	@GetMapping
	public String getMessage() {
		return "Welcome to department Dashboard!!";
	}

    @PostMapping("/add-department")
	public String Adddepartment(@RequestBody Department department){
		if(department.getDoctor()!=null){
			for(Doctor doc:department.getDoctor()){
				doc.setDepartment(department);
			}
		}
     service.Adddepartment(department);
	 return "User add successfully!!";
	}

	@DeleteMapping("/delete-{did}")
	public String deleteDepartment(@RequestParam int did){
		service.deleteDepartment(did);
		return "Delete user Successfully !!";
	}

	@GetMapping("/get-department")
	public List<Department> getAllDepartment(){
	   return service.getAllDepartment();
	}

	@PutMapping("/update-{id}")
	public String updateDepartment(@PathVariable int id, @RequestBody Department department){
		service.updateDepartment(id,department);
		return "update successfully!!";
	}
}
