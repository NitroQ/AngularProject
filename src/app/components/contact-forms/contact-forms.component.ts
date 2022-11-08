import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.scss']
})
export class ContactFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  btnSubmit() {
    Swal.fire({
      title: 'THANK YOU FOR MESSAGING US',
      html: '<p>Your message has been successfully sent to Nibs and Knobs! Our team will get back to you soon!</p> <img class=" w-50 h-75 my-2" src="../../../assets/images/contact-images/email-icon.png">',
      background: `#1a1a1a`,
      width: '40%',
      buttonsStyling: false,
      confirmButtonText: 'Okay',
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
}

