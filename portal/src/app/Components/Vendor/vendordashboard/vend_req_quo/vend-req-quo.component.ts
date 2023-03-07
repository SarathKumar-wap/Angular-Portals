import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendService } from '../../vendorservice/vend.service';

export interface UserData {
  Pur_Doc_No: any;
  Vendor_Acc_No: any;
  Currency_Key : any;
  Exchange_Rate: any;
  Created_On: any;
  Created_By: any;
}
@Component({
  selector: 'app-vend-req-quo',
  templateUrl: './vend-req-quo.component.html',
  styleUrls: ['./vend-req-quo.component.css']
})
export class VendReqQuoComponent implements OnInit {
  vendReqQuoArray:any;
  displayedColumns: string[] = [
    'Pur_Doc_No',
    'Vendor_Acc_No',
    'Currency_Key',
    'Exchange_Rate',
    'Created_On',
    'Created_By',
  ];

  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:VendService) { }

  ngOnInit(): void {
    this.service.vend_req_quo().subscribe((data: any) => {
      console.log(data);
      this.vendReqQuoArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_REQ_QUO_SK.Response']['RESULT']['item'];
      console.log(this.vendReqQuoArray);
       var vendReqQuoArray1 = this.vendReqQuoArray.map((item:any)=>{
        return {
          Pur_Doc_No: item.EBELN['_text'],
          Vendor_Acc_No: item.LIFNR['_text'],
          Currency_Key: item.WAERS['_text'],
          Exchange_Rate : item.WKURS['_text'],
          Created_On: item.AEDAT['_text'],
          Created_By: item.ERNAM['_text'],
        };
      });
      console.log(vendReqQuoArray1);
      
      this.dataSource = new MatTableDataSource(vendReqQuoArray1);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
