import { Component, OnInit } from '@angular/core';
import { ConsultModel } from './consult.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss'],
})
export class ConsultComponent implements OnInit {
  // * * when book button is click, confirmation message will appear


  bookingForm !: FormGroup;
  bookingModelObj : ConsultModel = new ConsultModel();
  bookingData !: any;
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      propertyType: [''],
      budget: [''],
      plan: [''],
      clientName: [''],
      email: [''],
      mobile: [''],
      company: [''],
      consultationDate: [''],
      timeAppointment: ['']
    })
    this.getBookingDetails();
  }

  postBookingDetails(){
    this.bookingModelObj.propertyType = this.bookingForm.value.propertyType;
    this.bookingModelObj.budget = this.bookingForm.value.budget;
    this.bookingModelObj.plan = this.bookingForm.value.plan;
    this.bookingModelObj.clientName = this.bookingForm.value.clientName;
    this.bookingModelObj.email = this.bookingForm.value.email;
    this.bookingModelObj.mobile = this.bookingForm.value.mobile;
    this.bookingModelObj.company = this.bookingForm.value.company;
    this.bookingModelObj.consultationDate = this.bookingForm.value.consultationDate;
    this.bookingModelObj.timeAppointment = this.bookingForm.value.timeAppointment;

    this.api.postBooking(this.bookingModelObj)
    .subscribe(res=>{
      console.log(res);
      this.btnBook();
    },
    err=>{
      alert("Something went wrong");

  });

  }
  getBookingDetails(){
    this.api.getBooking()
    .subscribe(res=>{
      this.bookingData = res;
    })
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
}
