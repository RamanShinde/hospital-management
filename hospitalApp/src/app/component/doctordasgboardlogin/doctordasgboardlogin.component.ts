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
         id=null
         errormesg="";
     
         login(){
           if(this.email==="Deepak" && this.password==="deepak@1234" && this.id===5){
            localStorage.setItem("doctorId",this.id);
             this.route.navigate(["DoctordashboardComponent"])
           }
           else{
             this.errormesg="Something went wrong!!"
           }
         }
}
