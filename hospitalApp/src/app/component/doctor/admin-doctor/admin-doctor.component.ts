import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.css']
})
export class AdminDoctorComponent  implements OnInit{
constructor
    (private fb:FormBuilder,
      private route:Router
    ){}

    email="";
    password="";
    errormesg="";

    
  ngOnInit() {
 
    this.email = '';
    this.password = '';
    this.errormesg = '';
  }

    login(){
      if(this.email==="raman" && this.password==="raman@1234"){
        this.route.navigate(["doctors"])
      }
      else{
        this.errormesg="Something went wrong!!"
      }
    }
}
