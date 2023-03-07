import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustService } from '../../customerservice/cust.service';

export interface UserData {
  Customer: any;
  AssignedNumber: any;
  AccountingNumber: any;
  Reference_Document_No: any;
  Amount_Loc_Currency: any;
  Amount_Doc_Currency: any;
}

@Component({
  selector: 'app-paymentsaging',
  templateUrl: './paymentsaging.component.html',
  styleUrls: ['./paymentsaging.component.css']
})
export class PaymentsagingComponent implements OnInit {
  paymentsagingArray:any;
  displayedColumns: string[] = [
    'Customer',
    'AssignedNumber',
    'AccountingNumber',
    'Reference_Document_No',
    'Amount_Loc_Currency',
    'Amount_Doc_Currency',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:CustService) { }
  ngOnInit(): void {
    this.service.paymentsaging().subscribe((data: any) => {
      console.log(data);
      this.paymentsagingArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_PAYMENTAGE.Response']['IT_PAYMENT_LIST']['item'].slice(1);
      console.log(this.paymentsagingArray);
       var paymentsagingArray1 = this.paymentsagingArray.map((item:any)=>{
        return {
          Customer: item.CUSTOMER['_text'],
          AssignedNumber: item.ALLOC_NMBR['_text'], 
          AccountingNumber: item.DOC_NO['_text'],
          Reference_Document_No : item.REF_DOC_NO['_text'],
Amount_Loc_Currency: item.LC_AMOUNT['_text'],
          Amount_Doc_Currency: item.AMT_DOCCUR['_text'],
        };
      });
      console.log(paymentsagingArray1);
      
      this.dataSource = new MatTableDataSource(paymentsagingArray1);
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

