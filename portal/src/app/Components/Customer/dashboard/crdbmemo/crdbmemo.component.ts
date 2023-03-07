import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustService } from '../../customerservice/cust.service';

export interface UserData {
  BillingDoc: any;
  BillingDate: any;
  DocCurrency: any;
  No_of_Doc: any;
  NetValue: any;
  CreatedBy: any;
}

@Component({
  selector: 'app-crdbmemo',
  templateUrl: './crdbmemo.component.html',
  styleUrls: ['./crdbmemo.component.css']
})
export class CrdbmemoComponent implements OnInit {
  crdbmemoArray:any;
  displayedColumns: string[] = [
    'BillingDoc',
    'BillingDate',
    'DocCurrency',
    'No_of_Doc',
    'NetValue',
    'CreatedBy',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:CustService) { }
  ngOnInit(): void {
    this.service.crdbmemo().subscribe((data: any) => {
      console.log(data);
      this.crdbmemoArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_CRDBMEMO.Response']['IT_CRDBMEMO_LIST']['item'].slice(1);
      console.log(this.crdbmemoArray);
       var crdbmemoArray1 = this.crdbmemoArray.map((item:any)=>{
        return {
          BillingDoc: item.VBELN['_text'],
          BillingDate: item.FKDAT['_text'],
          DocCurrency: item.WAERK['_text'],
          No_of_Doc : item.KNUMV['_text'],
NetValue: item.NETWR['_text'],
          CreatedBy: item.ERNAM['_text'],
        };
      });
      console.log(crdbmemoArray1);
      
      this.dataSource = new MatTableDataSource(crdbmemoArray1);
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
