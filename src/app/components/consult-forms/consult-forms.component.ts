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
  // get userDetails() {
  //   return this.multistep.controls['userDetails']['controls'];
  // }

  // get contactDetails() {
  //   return this.multistep.controls['contactDetails']['controls'];
  // }

  submit() {
    // this.submitted = true;
    // if (this.multistep.controls.userDetails.invalid && this.step == 1) {
    //   return;
    // }
    // if (this.multistep.controls.contactDetails.invalid && this.step == 2) {
    //   return;
    // }
    this.step = this.step + 1;
    if (this.step == 3) {
      this.route.navigate(['/consult']);
    }
  }

  previous() {
    this.step = this.step - 1;
  }
}
