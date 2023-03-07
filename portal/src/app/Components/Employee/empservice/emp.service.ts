import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient, private _snackBar: MatSnackBar) { }
  emplogin(data: any) {
    // console.log("service hi");
    return this.http.post('http://localhost:4000/emplogin', {
      uname: data.uname,
      pwd: data.pwd,
    });
    
  }
  emp_leave() {
    return this.http.post('http://localhost:4000/emp_leave', {
      uname: localStorage.getItem("userempid")
    });
  }
  emp_payroll() {
    return this.http.post('http://localhost:4000/emp_payroll', {
      uname: localStorage.getItem("userempid")
    });
  }
  
  employee_payslip(Seq_No:any, Payroll_Period:any) {
    return this.http.post('http://localhost:4000/employee_payslip', {
    uname_employee: localStorage.getItem("userempid"),
    Seq_No,
    Payroll_Period
    });
    }
  emp_profile() {
    return this.http.post('http://localhost:4000/emp_profile', {
      uname: localStorage.getItem("userempid")
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
