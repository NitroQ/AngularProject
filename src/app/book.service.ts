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
  // updateBooking(data : any, id : number){
  //   return this.http.put<any>('http://localhost:3000/bookings/' + id, data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // deleteBooking(id : number){
  //   return this.http.delete<any>("http://localhost:3000/bookings/" + id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
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

}
