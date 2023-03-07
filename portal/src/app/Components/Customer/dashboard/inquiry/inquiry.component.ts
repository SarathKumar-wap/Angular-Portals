import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustService } from '../../customerservice/cust.service';
export interface UserData {
  docNumber: any;
  description: any;
  date: any;
  by: any;
  category: any;
  sdCurrency: any;
}

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  inquiryArray:any;
  displayedColumns: string[] = [
    'docNumber',
    'description',
    'date',
    'by',
    'category',
    'sdCurrency',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:CustService) { }

  ngOnInit(): void {
    this.service.inquiry().subscribe((data: any) => {
      console.log(data);
      this.inquiryArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_INQUIRY.Response']['IT_INQUIRY_LIST']['item'];
      console.log(this.inquiryArray);
      
      var inquiryArray1 = this.inquiryArray.map((item:any)=>{
        return {
          docNumber: item.VBELN['_text'],
          description: item.BSTNK['_text'],
          date: item.ERDAT['_text'],
          by: item.ERNAM['_text'],
category: item.VBTYP['_text'],
          sdCurrency: item.WAERK['_text'],
        };
      });
      console.log(inquiryArray1);
      
      this.dataSource = new MatTableDataSource(inquiryArray1);
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
