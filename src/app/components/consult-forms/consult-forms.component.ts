import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';

@Component({
  selector: 'app-consult-forms',
  templateUrl: './consult-forms.component.html',
  styleUrls: ['./consult-forms.component.scss'],
})
export class ConsultFormsComponent implements OnInit {
  isMeridian = true;
  showSpinners = false;

  bsdatePickerConfig?: Partial<BsDatepickerConfig>;
  constructor() {
    // change color of calander to datePicker
    this.bsdatePickerConfig = Object.assign({}, { containerClass: 'theme-default' });
  }

  ngOnInit(): void {}
}
