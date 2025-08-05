import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/service/Auhtorization/authservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
     user={
      email:"",
      password:"",
      role:"",
     };

     constructor(
      private authservice:AuthserviceService,
     ){}

     onsubmit(){
      this.authservice.signup(this.user).subscribe(
        response=>{
          alert("Signup successfully!!");
        },
        error=>{
          console.error("Signup fialed:",error);
          alert('signup failed');
        }
      )
     }
}