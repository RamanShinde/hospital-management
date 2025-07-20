package com.example.HospitalManagmentSystem.Service;

import com.example.HospitalManagmentSystem.Entity.Department;
import com.example.HospitalManagmentSystem.Repository.DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    DepartmentRepo repo;

    public void Adddepartment(Department department){
        repo.save(department);
    }
    public void deleteDepartment(int did) {
        Department department = repo.findById(did).orElseThrow(() -> new RuntimeException("user not found!"));
        repo.delete(department);
    }
    public List<Department> getAllDepartment() {
      return repo.findAll();
    }

    public void updateDepartment(int id, Department department) {
        Department extingDepartment=repo.findById(id).orElseThrow(()-> new RuntimeException("User not found!!"));
        extingDepartment.setDepartment(department.getDepartment());
        repo.save(extingDepartment);
    }
}
