import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-get-doctor',
  templateUrl: './get-doctor.component.html',
  styleUrls: ['./get-doctor.component.css']
})
export class GetDoctorComponent implements OnInit {
  doctors: any[] = [];
  extingIndex: number | null = null;
  updatedoctor!: FormGroup;


  constructor(private doctorservice: DoctorService,
    private fb: FormBuilder
  ) { };

  ngOnInit(): void {
    this.doctorservice.getDoctor().subscribe(
      (data) => {
        this.doctors = data;
      },
      (Error) => {
        console.error("Something went wrong", Error);

      }
    );


    this.updatedoctor = this.fb.group({
      doctorname: [""],
      specilization: [""],
      phonenumber: [""],
      available:[""],
      department: this.fb.group({
        deptid: [""],
      })
    });
  }

  editForm(doctor: any, index: number) {
    this.extingIndex = doctor.did;
    this.updatedoctor?.patchValue(doctor);
  }

  updateForm() {
    if (this.extingIndex != null) {
      this.doctorservice.updateDoctor(this.extingIndex, this.updatedoctor?.value).subscribe(
        (resp) => {
          console.log(resp);
          alert("update succesfully");
          this.extingIndex = null;
          this.updatedoctor.reset();
          this.ngOnInit();
        }
      )
    };
  }
  cancel() {
    this.extingIndex = null;
    this.updatedoctor?.reset();
  }

  deleteDoctor(id:number){
    if(confirm("are you want to delete")){
      this.doctorservice.deleteDoctor(id).subscribe(
        (data)=>{
          console.log(data);
          alert("Delete successfully");
          this.ngOnInit();
        },
        (error)=>{
          console.error("Something went wrong",error);
          alert(error);
        }
      )
    }
  }

}
