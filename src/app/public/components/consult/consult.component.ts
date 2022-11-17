import { Component, OnInit } from '@angular/core';
import { ConsultModel } from './consult.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss'],
})
export class ConsultComponent implements OnInit {
  // * * when book button is click, confirmation message will appear
  bookingForm!: FormGroup;
  bookingModelObj: ConsultModel = new ConsultModel();
  submitted: boolean = false;
  bookingDates : any = [];
  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      propertyType: ['', Validators.required],
      budget: ['', Validators.required],
      plan: ['', Validators.required],
      clientName: ['', Validators.required],
      designerNote: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      company: ['', Validators.required],
      consultationDate: ['', Validators.required],
      timeAppointment: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  get form() {
    return this.bookingForm.controls;
  }
  postBookingDetails() {
    this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    } else {
      this.bookingModelObj.propertyType = this.bookingForm.value.propertyType;
      this.bookingModelObj.budget = this.bookingForm.value.budget;
      this.bookingModelObj.plan = this.bookingForm.value.plan;
      this.bookingModelObj.clientName = this.bookingForm.value.clientName;
      this.bookingModelObj.email = this.bookingForm.value.email;
      this.bookingModelObj.mobile = this.bookingForm.value.mobile;
      this.bookingModelObj.company = this.bookingForm.value.company;
      this.bookingModelObj.consultationDate = this.bookingForm.value.consultationDate;
      this.bookingModelObj.timeAppointment = this.bookingForm.value.timeAppointment;
      this.bookingModelObj.status = 'pending';

      this.api.postBooking(this.bookingModelObj).subscribe(
        (res) => {
          console.log(res);
          this.btnBook();
          this.bookingForm.reset();
        },
        (err) => {
          alert('Something went wrong');
        }
      );
    }
  }

  btnBook() {
    Swal.fire({
      title: 'Your Booking is CONFIRMED',
      imageUrl: '../../../assets/images/consult-images/check-icon.png',
      html: 'You have successfully booked a consultation with Nibs and Knobs! A meeting invitation will be sent to your email.',
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'OKAY!',
      buttonsStyling: false,
      customClass: {
        title: 'SoraBold orange',
        popup: 'popup-border py-4 px-3',
        htmlContainer: '#343434',
        actions: 'd-flex w-100',
        confirmButton: 'btn-modal px-4 py-2 rounded-pill mx-auto d-block text-uppercase',
      },
    });
  }

  // getDates(){
  //   this.api.getImage()
  //   .subscribe(res=>{
  //     for (let i = 0; i < res.length; i++) {
  //       if(res[i].status == "pending" || res[i].status == "confirmed"){
  //        this.bookingDates.push(res[i]);
  //      }
  //  }
  //   })

  // }
}
