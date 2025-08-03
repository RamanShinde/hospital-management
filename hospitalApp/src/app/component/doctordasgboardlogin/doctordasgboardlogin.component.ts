import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/Auhtorization/authservice.service';

@Component({
  selector: 'app-doctordasgboardlogin',
  templateUrl: './doctordasgboardlogin.component.html',
  styleUrls: ['./doctordasgboardlogin.component.css']
})
export class DoctordasgboardloginComponent {
  constructor
    (private fb: FormBuilder,
      private auth: AuthserviceService,
      private route: Router
    ) { }

  email = "";
  password = "";
  // id = 3;
  role="";
  errormesg = "";

  login() {
    this.auth.login(this.email, this.password,this.role).subscribe({
      next: (res) => {
        localStorage.setItem("doctorId", this.id.toString());
        this.route.navigate(["doctor-dashboard"])
      },
      error: (err) => {
        console.error(err);
        this.errormesg = "Invalid credentials!";
      }
    });
  }
}
