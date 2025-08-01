package com.example.HospitalManagmentSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HospitalManagmentSystem.Entity.Department;

@Repository
public interface DepartmentRepo extends JpaRepository<Department, Integer>{

}
