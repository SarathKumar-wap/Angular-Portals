import { Component, OnInit } from '@angular/core';
import { VendService } from '../../vendorservice/vend.service';

@Component({
  selector: 'app-vend-detail',
  templateUrl: './vend-detail.component.html',
  styleUrls: ['./vend-detail.component.css']
})
export class VendDetailComponent implements OnInit {

  constructor(private auth:VendService) { }
  Vend_DetailArray:any;

  ngOnInit(): void {this.auth.vend_detail().subscribe((data:any) =>{
      console.log(data);
      if(Object.keys(data).length>0)
      {
        
      this.Vend_DetailArray=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_DETAIL_SK.Response'];}
    })

  }

}
