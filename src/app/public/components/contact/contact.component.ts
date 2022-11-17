import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  btnSubmit() {
    Swal.fire({
      title: 'Your Booking is CONFIRMED',
      imageUrl: '../../../assets/images/contact-images/email-icon.png',
      html: 'Your message has been successfully sent to Nibs and Knobs! Our team will get back to you soon!',
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

  constructor() {}

  ngOnInit(): void {}
}
