import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class VendService {

  constructor(private http:HttpClient, private _snackBar: MatSnackBar) { }
  vendorlogin(data: any) {
    // console.log("service hi");
    return this.http.post('http://localhost:4000/vendorlogin', {
      uname: data.uname,
      pwd: data.pwd,
    });
}
vend_credit() {
  return this.http.post('http://localhost:4000/vend_credit', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_debit() {
  return this.http.post('http://localhost:4000/vend_debit', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_detail() {
  return this.http.post('http://localhost:4000/vend_detail', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_go_rec() {
  return this.http.post('http://localhost:4000/vend_go_rec', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_inv() {
  return this.http.post('http://localhost:4000/vend_inv', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_payage() {
  return this.http.post('http://localhost:4000/vend_payage', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_purorder() {
  return this.http.post('http://localhost:4000/vend_purorder', {
    uname: localStorage.getItem("uservendid")
  });
}
vend_req_quo() {
  return this.http.post('http://localhost:4000/vend_req_quo', {
    uname: localStorage.getItem("uservendid")
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
