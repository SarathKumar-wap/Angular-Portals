import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustService } from '../customerservice/cust.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private service: CustService, private router: Router) { }

  ngOnInit(): void { 
   if (!localStorage.getItem("userid")){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/dashboard']);
    }


  }

  getresult(userdata: any) {
    
    this.service.login(userdata).subscribe((data: any) => {
      console.log(data);
      if (data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_LOGIN.Response'][
        'E_RETURN']['TYPE'
      ]['_text'] === 'S') {
        localStorage.setItem("userid",userdata.uname);
        this.service.success("Login Successful!")
        this.router.navigate(['/dashboard']);
      }
      else
      {
        this.service.error("Fill out the required fields with correct credentials!!!")
      }

      
    });
  }

}
