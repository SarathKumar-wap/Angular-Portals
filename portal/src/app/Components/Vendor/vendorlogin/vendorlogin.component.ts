import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendService } from '../vendorservice/vend.service';
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  constructor(private service: VendService, private router: Router) { } 

  ngOnInit(): void {
    if (!localStorage.getItem("uservendid")){
      this.router.navigate(['/vendorlogin']);
    }else{
      this.router.navigate(['/vendordashboard']);
    }

  }
  getresult(userdata: any) {
    
    this.service.vendorlogin(userdata).subscribe((data: any) => {
      console.log(userdata);
      if (data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_LOGIN_SARATH.Response'][
        'MESSAGE'
      ]['_text'] === 'SUCCESS') {
        localStorage.setItem("uservendid",userdata.uname);
        this.service.success("Login Successful!")

        this.router.navigate(['/vendordashboard']);
      }
      else
      {
        this.service.error("Fill out the required fields with correct credentials!!!")
      }

      
    });
  }

}
