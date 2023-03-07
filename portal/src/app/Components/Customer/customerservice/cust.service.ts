import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  
  constructor(private http:HttpClient, private _snackBar: MatSnackBar){} 
  login(data: any) {
    // console.log("service hi");
    return this.http.post('http://localhost:4000/login', {
      uname: data.uname,
      pwd: data.pwd,
    });
    
  }
  profile() {
    return this.http.post('http://localhost:4000/profile', {
      uname: localStorage.getItem("userid")
    });
  }
  inquiry() {
    return this.http.post('http://localhost:4000/inquiry', {
      uname: localStorage.getItem("userid")
    });
  }
  crdbmemo() {
    return this.http.post('http://localhost:4000/crdbmemo', {
      uname: localStorage.getItem("userid")
    });
  }
  delivery() {
    return this.http.post('http://localhost:4000/delivery', {
      uname: localStorage.getItem("userid")
    });
  }
  invoice() {
    return this.http.post('http://localhost:4000/invoice', {
      uname: localStorage.getItem("userid")
    });
  }
  paymentsaging() {
    return this.http.post('http://localhost:4000/paymentsaging', {
      uname: localStorage.getItem("userid")
    });
  }
  saleorder() {
    return this.http.post('http://localhost:4000/saleorder', {
      uname: localStorage.getItem("userid")
    });
  }
  error(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-error'],
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  success(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-success'],
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
  info(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-info'],
      duration: 1500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

}
