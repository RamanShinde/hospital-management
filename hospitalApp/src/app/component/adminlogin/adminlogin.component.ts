import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/Auhtorization/authservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor
    (private fb: FormBuilder,
      private service: AuthserviceService,
      private route: Router
    ) { }

  email = "";
  password = "";
  errormesg = "";

  login() {
    this.service.login(this.email, this.password, "ADMIN").subscribe({
      next: (resp) => {
        console.log(resp);
        this.route.navigate(["admin"])
      },
      error: (err) => {
        console.error(err);
        this.errormesg = "Invalid credentials!";
      }
    });
  }

}
