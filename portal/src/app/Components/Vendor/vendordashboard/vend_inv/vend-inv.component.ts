import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendService } from '../../vendorservice/vend.service';

export interface UserData {
  Doc_No: any;
  Gross_Amount: any;
  Doc_Date : any;
  Posting_Date: any;
  Entry_Date: any;
  Entry_Time: any;
}
@Component({
  selector: 'app-vend-inv',
  templateUrl: './vend-inv.component.html',
  styleUrls: ['./vend-inv.component.css']
})
export class VendInvComponent implements OnInit {vendInvArray:any;
  displayedColumns: string[] = [
    'Doc_No',
    'Gross_Amount',
    'Doc_Date',
    'Posting_Date',
    'Entry_Date',
    'Entry_Time',
  ];

  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:VendService) { }

  ngOnInit(): void {this.service.vend_inv().subscribe((data: any) => {
    console.log(data);
    this.vendInvArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_INV_SK.Response']['HEADER_TABLE']['item'];
    console.log(this.vendInvArray);
     var vendInvArray1 = this.vendInvArray.map((item:any)=>{
      return {
        Doc_No: item.INV_DOC_NO['_text'],
        Gross_Amount: item.GROSS_AMNT['_text'],
        Doc_Date: item.DOC_DATE['_text'],
        Posting_Date : item.PSTNG_DATE['_text'],
        Entry_Date: item.ENTRY_DATE['_text'],
        Entry_Time: item.ENTRY_TIME['_text'],
      };
    });
    console.log(vendInvArray1);
    
    this.dataSource = new MatTableDataSource(vendInvArray1);
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
