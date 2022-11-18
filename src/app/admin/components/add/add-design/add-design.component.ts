import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { ApiService } from '../../../../api.service';
import { ImageModel } from './add-design.model';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-design',
  templateUrl: './add-design.component.html',
  styleUrls: ['./add-design.component.scss'],
})
export class AddDesignComponent implements OnInit {
  myImage: any;
  base64code!: any;
  addImage!: FormGroup;
  imageModelObj: ImageModel = new ImageModel();
  imageData!: any;
  category: any = this.route.snapshot.queryParamMap.get('category');
  submitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private api: ApiService) {}

  ngOnInit(): void {
    if (this.category == null || this.category == undefined) {
      this.location.back();
    }

    this.addImage = this.fb.group({
      description: ['', Validators.required],
      category: [''],
      dimensions: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  get form() {
    return this.addImage.controls;
  }
  addCancel() {
    if (this.category == 'livingroom') {
      this.router.navigate(['/admin/living-room']);
    } else if (this.category == 'homeoffice') {
      this.router.navigate(['/admin/home-office']);
    } else if (this.category == 'spacesaving') {
      this.router.navigate(['/admin/space-saving']);
    } else {
      this.router.navigate(['/admin/' + this.category]);
    }
  }

  onChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file);
  }

  postImage() {
    this.submitted = true;
    if (this.addImage.invalid) {
      return;
    } else {
      this.imageModelObj.description = this.addImage.value.description;
      this.imageModelObj.category = this.category;
      this.imageModelObj.dimensions = this.addImage.value.dimensions;
      this.imageModelObj.image = this.base64code;

      this.api.postImage(this.imageModelObj).subscribe(
        (res) => {
          this.createDesignDetails();
          this.addImage.reset();
        },
        (err) => {
          alert('Something went wrong');
        }
      );
    }
  }

  createDesignDetails() {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Add',
      denyButtonText: `Don't add`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.postImage();
        Swal.fire('Successfully added!', '', 'success');
        this.addCancel();
      } else if (result.isDenied) {
        Swal.fire('No design added', '', 'info');
      }
    });
  }
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: any) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      console.log(d);
      this.myImage = d;
      this.base64code = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
