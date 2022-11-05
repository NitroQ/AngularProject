import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Router } from '@angular/router';

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
}
