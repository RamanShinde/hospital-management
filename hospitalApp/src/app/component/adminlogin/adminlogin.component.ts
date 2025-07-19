import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

    constructor
    (private fb:FormBuilder,
      private route:Router
    ){}

    email="";
    password="";
    errormesg="";

    login(){
      if(this.email==="raman" && this.password==="raman@1234"){
        this.route.navigate(["admin"])
      }
      else{
        this.errormesg="Something went wrong!!"
      }
    }
    
}
