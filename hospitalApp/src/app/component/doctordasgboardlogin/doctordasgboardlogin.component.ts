import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctordasgboardlogin',
  templateUrl: './doctordasgboardlogin.component.html',
  styleUrls: ['./doctordasgboardlogin.component.css']
})
export class DoctordasgboardloginComponent {
      constructor
         (private fb:FormBuilder,
           private route:Router
         ){}
     
         email="";
         password="";
         id=null;
         errormesg="";
     
         login(){
           if(this.email==="RamanShinde" && this.password==="raman@1234" && this.id===3){
            localStorage.setItem("doctorId",this.id);
             this.route.navigate(["DoctordashboardComponent"])
           }
           else{
             this.errormesg="Something went wrong!!"
           }
         }
}
