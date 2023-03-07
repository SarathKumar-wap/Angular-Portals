import { Component, OnInit } from '@angular/core';
import { CustService } from '../../customerservice/cust.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: CustService) { }
  profileArray:any;
  ngOnInit(): void {
    this.auth.profile().subscribe((data:any) =>{
      console.log(data);
      if(Object.keys(data).length>0)
      {
        
      this.profileArray=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_PROFILE.Response'];}
    })

  }

}
