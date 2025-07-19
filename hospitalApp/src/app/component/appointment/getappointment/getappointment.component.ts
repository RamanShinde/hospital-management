import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppoitmetService } from 'src/app/service/Appoitment/appoitmet.service';


@Component({
  selector: 'app-getappointment',
  templateUrl: './getappointment.component.html',
  styleUrls: ['./getappointment.component.css']
})
export class GetappointmentComponent implements OnInit {


  extingindex: number | null = null
  updateappointForm!: FormGroup;
  responesemesg = "";

  constructor(
    private service: AppoitmetService,
    private fb: FormBuilder
  ) { }

  appointments: any[] = []

  ngOnInit(): void {
    this.service.getAppoitment().subscribe(
      (resp) => {
        console.log(resp);
        this.appointments = resp;
      }
    );

    this.updateappointForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorId: [null, Validators.required],
      doctorName: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  editForm(appointment: any, index: number) {
    this.extingindex = index;
    this.updateappointForm.patchValue(appointment);
  }

  updateForm() {
    if (this.extingindex != null) {
      this.service.updateAppoitment(this.updateappointForm.value, this.extingindex).subscribe(
        (resp) => {
          alert(resp);
          this.extingindex = null;
           this.ngOnInit();
        },
        (error) => {
          this.responesemesg = "failed";
          alert(error);
          this.ngOnInit();
        }
      )
      this.updateappointForm.reset();
    }
  }
  cancelEdit() {
    this.extingindex = null;
    this.updateappointForm.reset();
  }
  deleteAppointment(id: number) {
    if (confirm("Are you want to delete")) {
      this.service.deleteAppointment(id).subscribe(
        (resp: string) => {
          alert(resp);
          this.ngOnInit();
        }
      )
    }
    // this.service.getAppoitment();
  }
}
