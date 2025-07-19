import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';


@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent {
    index:number|null=null;
    constructor(private fb:FormBuilder,private route:Router,private service:DoctorService){};
    
    DoctorForm=this.fb.group({
       doctorname:[""],
       specilization:[""],
       phonenumber:[""],
       department:this.fb.group({
          deptid:[""],
       })       
    });
    doctor:any;
    onsubmit(){
      console.log(this.DoctorForm.value);
      this.doctor=this.DoctorForm.value;
      this.service.addDoctor(this.doctor).subscribe(
        (resp)=>{
          console.log(resp);
          alert("Add successfully!!")
          
        },
        (error)=>{
           console.error("somthing went wrong",error);
           alert(error);
        }
      );
      this.DoctorForm.reset();
    }

}
