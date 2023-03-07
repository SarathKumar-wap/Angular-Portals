import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../empservice/emp.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  constructor(private auth: EmpService) { }
  profileArray:any;
  ngOnInit(): void {
    this.auth.emp_profile().subscribe((data:any) =>{
      console.log(data);
      if(Object.keys(data).length>0)
      {
        
      this.profileArray=data['SOAP:Envelope']['SOAP:Body']['rfc:ZFM_SK_EMP_LOGIN_DET.Response'];}
    })

  }

}
