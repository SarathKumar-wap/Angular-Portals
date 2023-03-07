import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustService } from '../../customerservice/cust.service';

export interface UserData {
  Itm_No: any;
  Sd_doc: any;
  Req_qty: any;
  Purch_No: any;
  Req_date: any;
  Valid_to: any;
}
@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit {
  saleorderArray:any;
  displayedColumns: string[] = [
    'Itm_No',
    'Sd_doc',
    'Req_qty',
    'Purch_No',
    'Req_date',
    'Valid_to',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:CustService) { }
  ngOnInit(): void {
    this.service.saleorder().subscribe((data: any) => {
      console.log(data);
      this.saleorderArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_SALEORDER.Response']['IT_SALES_ORDERS']['item'];
      console.log(this.saleorderArray);
       var saleorderArray1 = this.saleorderArray.map((item:any)=>{
        return {
          Itm_No: item.ITM_NUMBER['_text'],
          Sd_doc: item.SD_DOC['_text'],
          Req_qty: item.REQ_QTY['_text'],
          Purch_No : item.PURCH_NO['_text'],
Req_date: item.REQ_DATE['_text'],
          Valid_to: item.VALID_TO['_text'],
        };
      });
      console.log(saleorderArray1);
      
      this.dataSource = new MatTableDataSource(saleorderArray1);
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
