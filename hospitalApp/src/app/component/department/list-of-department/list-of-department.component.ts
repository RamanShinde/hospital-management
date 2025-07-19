import { Component, OnInit } from '@angular/core';
import { DepartmentserviceService } from 'src/app/service/department/departmentservice.service';

@Component({
  selector: 'app-list-of-department',
  templateUrl: './list-of-department.component.html',
  styleUrls: ['./list-of-department.component.css']
})
export class ListOfDepartmentComponent implements OnInit {
    constructor(
      private departmentservice:DepartmentserviceService
    ){}    
    departments:any[]=[];

      ngOnInit(): void {
        this.departmentservice.getDepartment().subscribe(
          (data)=>{
            this.departments=data;
          },
          (error)=>{
            console.error('Error fetching departments:', error);
          }
          
        )
    }
     
}
