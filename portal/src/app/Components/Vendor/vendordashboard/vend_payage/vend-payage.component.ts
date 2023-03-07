import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendService } from '../../vendorservice/vend.service';

export interface UserData {
  Vendor: any;
  Doc_Number: any;
  Local_Currency : any;
  Doc_Currency: any;
  CashDiscount: any;
  Amount: any;
}
@Component({
  selector: 'app-vend-payage',
  templateUrl: './vend-payage.component.html',
  styleUrls: ['./vend-payage.component.css']
})
export class VendPayageComponent implements OnInit {
  vendPayageArray:any;
  displayedColumns: string[] = [
    'Vendor',
    'Doc_Number',
    'Local_Currency',
    'Doc_Currency',
    'CashDiscount',
    'Amount',
  ];

  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:VendService) { }

  ngOnInit(): void {
    this.service.vend_payage().subscribe((data: any) => {
      console.log(data);
      this.vendPayageArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PA_SK.Response']['RESULT']['item'];
      console.log(this.vendPayageArray);
       var vendPayageArray1 = this.vendPayageArray.map((item:any)=>{
        return {
          Vendor: item.VENDOR['_text'],
          Doc_Number: item.DOC_NO['_text'],
          Local_Currency: item.LC_AMOUNT['_text'],
          Doc_Currency : item.AMT_DOCCUR['_text'],
          CashDiscount: item.DISC_BASE['_text'],
          Amount: item.AMOUNT['_text'],
        };
      });
      console.log(vendPayageArray1);
      
      this.dataSource = new MatTableDataSource(vendPayageArray1);
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
