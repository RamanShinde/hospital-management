import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentserviceService } from 'src/app/service/department/departmentservice.service';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {


      constructor(
         private route:Router,
         private fb:FormBuilder,
         private departmentservice:DepartmentserviceService,
      ){}
      
      dearForm=this.fb.group({
        department:[""]
      })

      department:any;
      onsubmit(){
        this.department=this.dearForm.value;
        this.departmentservice.addDepartment(this.department).subscribe(
          (resp)=>{
            console.log("Add successfully"+resp);
            //  this.route.navigate(["getDepartment"]);
            alert("add succesfuly!!")
          },
         (error)=>{

           console.error("somthing went wrong",error);
         }
          
        );
        this.dearForm.reset();
      }
}