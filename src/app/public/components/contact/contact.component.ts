import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { ContactModel } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  contactForm !: FormGroup;
  contactModelObj : ContactModel = new ContactModel();
  contactData !: any;

 
  // constructor(private api: ApiService) { }
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      company: [''],
      email: [''],
      concern: [''],
      message: [''],
      status: ['']
    })
  }

  postContactDetails(){
    this.contactModelObj.name = this.contactForm.value.name;
    this.contactModelObj.company = this.contactForm.value.company;
    this.contactModelObj.email = this.contactForm.value.email;
    this.contactModelObj.concern = this.contactForm.value.concern;
    this.contactModelObj.message = this.contactForm.value.message;
    this.contactModelObj.status = 'pending';

    this.api.postContact(this.contactModelObj)
    .subscribe(res=>{
      this.contactForm.reset();
      this.btnSubmit();
    },
    err=>{
      alert("Something went wrong");

  });

  }


  btnSubmit() {
    Swal.fire({
      title: 'Message Sent! Thank you for contacting us.',
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
}
