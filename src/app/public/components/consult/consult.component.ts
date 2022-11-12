import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss'],
})
export class ConsultComponent implements OnInit {
  // * * when book button is click, confirmation message will appear
  btnBook() {
    // Swal.fire({
    //   title: 'BOOKING CONFIRMATION',
    //   html: '<p>You have successfully booked a consultation with Nibs and Knobs! A meeting invitation will be sent in your email.</p> <img class="img-fluid my-2" src="../../../assets/images/consult-images/check-icon.png">',
    //   background: `#FFFFFF`,
    //   width: '40%',
    //   buttonsStyling: false,
    //   confirmButtonText: 'OKAY!',
    //   reverseButtons: true,
    //   customClass: {
    //     title: 'SoraBold orange',
    //     popup: 'popup-border py-4 px-3',
    //     htmlContainer: '#343434',
    //     actions: 'd-flex w-100',
    //     confirmButton: 'btn-modal px-4 py-2 rounded-pill mx-auto d-block text-uppercase',
    //   },
    // });
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

  constructor() {}

  ngOnInit(): void {}
}
