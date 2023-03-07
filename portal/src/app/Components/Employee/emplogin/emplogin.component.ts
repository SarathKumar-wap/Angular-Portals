import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../empservice/emp.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor(private service:EmpService, private router:Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("userempid")){
      this.router.navigate(['/emplogin']);
    }else{
      this.router.navigate(['/empdashboard']);
    }

  }
  getresult(userdata: any) {
    
    this.service.emplogin(userdata).subscribe((data: any) => {
      console.log(data);
      if (data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_EMP_LOGIN.Response'][
        'MESSAGE']['_text'] === 'SUCCESS') {
        localStorage.setItem("userempid",userdata.uname);
        this.service.success("Login Successful!")

        this.router.navigate(['/empdashboard']);
      }
      else
      {
        this.service.error("Fill out the required fields with correct credentials!!!")
      }

      
    });
  }

}


