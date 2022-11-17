import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { ImageModel } from './view-design.model';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-design',
  templateUrl: './view-design.component.html',
  styleUrls: ['./view-design.component.scss'],
})
export class ViewDesignComponent implements OnInit {
  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {}
  myImage: boolean = false;
  base64code!: any;
  addImage!: FormGroup;
  imageModelObj: ImageModel = new ImageModel();
  id!: any;
  imageData!: any;
  category!: any;
  designValue: any;
  submitted: boolean = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.api.getImage().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == this.id) {
          this.designValue = res[i];
          this.addImage = this.fb.group({
            description: [this.designValue.description, Validators.required],
            dimensions: [this.designValue.dimensions, Validators.required],
            image: [''],
          });
        }
      }
    });

    // this.addImage = this.fb.group({
    //   description: ['', Validators.required],
    //   dimensions: ['', Validators.required],
    //   image: ['', Validators.required],
    // })
    // this.addImage.controls['description'].setValue(this.designValue.description);
    // this.addImage.controls['dimensions'].setValue(this.designValue.dimensions);
  }

  get form() {
    return this.addImage.controls;
  }
  updateImage() {
    this.submitted = true;
    if (this.addImage.invalid) {
      return;
    } else {
      if (this.myImage) {
        this.imageModelObj.image = this.base64code;
      } else {
        this.imageModelObj.image = this.designValue.image;
      }

      this.imageModelObj.description = this.addImage.value.description;
      this.imageModelObj.category = this.category;
      this.imageModelObj.dimensions = this.addImage.value.dimensions;

      this.api.updateImage(this.imageModelObj, this.id).subscribe(
        (res) => {
          this.addImage.reset();
          this.updateImageDetails();
        },
        (err) => {
          alert('Something went wrong');
        }
      );
    }
  }

  // updateImage() {

  //    if(this.myImage){
  //     this.imageModelObj.image = this.base64code;
  //    }else{
  //     this.imageModelObj.image = this.designValue.image;
  //    }

  //   this.imageModelObj.description = this.addImage.value.description;
  //   this.imageModelObj.category = this.category;
  //   this.imageModelObj.dimensions = this.addImage.value.dimensions;

  //     this.api.updateImage(this.imageModelObj, this.id)
  //       .subscribe(res=>{
  //         Swal
  //       },
  //       err=>{
  //         alert("Something went wrong");

  //     });

  // }

  updateImageDetails() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.updateImage();
        Swal.fire('Saved!', '', 'success');
        this.addCancel();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
        this.addCancel();
      }
    });
  }

  addCancel() {
    if (this.category == 'livingroom') {
      this.router.navigate(['admin/living-room']);
    } else if (this.category == 'homeoffice') {
      this.router.navigate(['admin/home-office']);
    } else if (this.category == 'spacesaving') {
      this.router.navigate(['admin/space-saving']);
    } else {
      this.router.navigate(['admin/' + this.category]);
    }
  }

  onChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.myImage = true;
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: any) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
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
