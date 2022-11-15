import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  // NGX DROPZONE OPTIONS
  files: File[] = [];
  myImage: any;
  base64code !: any;
  addImage !: FormGroup;
  imageModelObj : ImageModel = new ImageModel();
  imageData !: any;

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const category = this.route.snapshot.queryParamMap.get('category');
    if(category == null || category == undefined){
      this.location.back();
    }

    this.addImage = this.fb.group({
      description: [''],
      category: [''],
      dimensions: [''],
      price: [''],
      image: ['']
    })
  }


  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
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
        Swal.fire('Successfully added!', '', 'success');
        this.router.navigate(['/admin/kitchen']);
      } else if (result.isDenied) {
        Swal.fire('No design added', '', 'info');
      }
    });
  }
  convertToBase64(file: File) {
  
    const observable = new Observable((subscriber: any) => {
      this.readFile(file, subscriber);
    })

    observable.subscribe((d) => {
      console.log(d)
     this.myImage = d
     this.base64code  = d
    })
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
