import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PropertyTypeOptions } from 'src/app/models/consult.models';

@Component({
  selector: 'app-consult-forms',
  templateUrl: './consult-forms.component.html',
  styleUrls: ['./consult-forms.component.scss'],
})
export class ConsultFormsComponent implements OnInit {
  isMeridian = true;
  showSpinners = false;
  step: any = 1;
  multistep = new FormGroup({
    planDetails: new FormGroup({
      propertyType: new FormControl('null', Validators.required),
      budget: new FormControl(''),
      plan: new FormControl(''),
      designerNote: new FormControl(''),
    }),
    dateDetails: new FormGroup({
      clientName: new FormControl(''),
      email: new FormControl('', Validators.required),
      mobile: new FormControl(''),
      company: new FormControl(''),
      consultationDate: new FormControl(''),
      timeAvailable: new FormControl(''),
    }),
  });
  // timepicker

  bsdatePickerConfig?: Partial<BsDatepickerConfig>;
  constructor(private route: Router) {
    // change color of calander to datePicker
    this.bsdatePickerConfig = Object.assign({}, { containerClass: 'theme-default' });
  }

  ngOnInit(): void {}
  get planDetails() {
    return this.multistep.controls['planDetails']['controls'];
  }

  get dateDetails() {
    return this.multistep.controls['dateDetails']['controls'];
  }

  submit() {
    // this.submitted = true;
    if (this.multistep.controls.planDetails.invalid && this.step == 1) {
      return;
    }
    if (this.multistep.controls.dateDetails.invalid && this.step == 2) {
      return;
    }
    this.step = this.step + 1;
    // if (this.step == 3) {
    //   this.route.navigate(['home']);
    // }
  }
  previous() {
    this.step = this.step - 1;
  }
  // * * when book button is click, confirmation message will appear
  btnSuccess() {
    Swal.fire({
      title: 'BOOKING CONFIRMATION',
      html: '<p>You have successfully booked a consultation with Nibs and Knobs! A meeting invitation will be sent in your email.</p> <img class="img-fluid my-2" src="../../../assets/images/consult-images/check-icon.png">',
      background: `#1a1a1a`,
      width: '40%',
      buttonsStyling: false,
      confirmButtonText: 'OK',
      reverseButtons: true,
      customClass: {
        title: 'SoraBold orange',
        popup: 'popup-border py-4 px-3',
        htmlContainer: 'white',
        actions: 'd-flex w-100',
        confirmButton: 'ms-auto me-4 btn mat-stroked-button rounded-pill',
      },
    });
  }

  propertyType: PropertyTypeOptions[] = [
    {
      id: 1,
      name: 'Apartment',
    },
    {
      id: 2,
      name: 'Townhouse',
    },
    {
      id: 3,
      name: 'Mansion',
    },
    {
      id: 4,
      name: 'Condo',
    },
  ];
}
