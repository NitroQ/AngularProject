import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postBooking(data : any){
    return this.http.post<any>('http://localhost:3000/bookings', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getBooking(){
    return this.http.get<any>("http://localhost:3000/bookings")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateBooking(data : any, id : number){
    return this.http.put<any>('http://localhost:3000/bookings/' + id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteBooking(id : number){
    return this.http.delete<any>("http://localhost:3000/bookings/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //image
  postImage(data : any){
    return this.http.post<any>('http://localhost:3000/images', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getImage(){
    return this.http.get<any>("http://localhost:3000/images")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteImage(id : number){
    return this.http.delete<any>("http://localhost:3000/images/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //user

  postUser(data : any){
    return this.http.post<any>('http://localhost:3000/user', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getUser(){
    return this.http.get<any>("http://localhost:3000/user")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateUser(data : any, id : number){
    return this.http.put<any>('http://localhost:3000/user/' + id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUser(id : number){
    return this.http.delete<any>("http://localhost:3000/user/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //contact

  postContact(data : any){
    return this.http.post<any>('http://localhost:3000/contact', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getContact(){
    return this.http.get<any>("http://localhost:3000/contact")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateContact(data : any, id : number){
    return this.http.put<any>('http://localhost:3000/contact/' + id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}
