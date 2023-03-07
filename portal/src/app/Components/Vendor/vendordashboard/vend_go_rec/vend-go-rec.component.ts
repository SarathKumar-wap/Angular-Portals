import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendService } from '../../vendorservice/vend.service';

export interface UserData {
  CreatedBy: any;
  Doc_Number: any;
  Doc_Date : any;
  Posting_Date: any;
  Entry_Date: any;
  Entry_Time: any;
}
@Component({
  selector: 'app-vend-go-rec',
  templateUrl: './vend-go-rec.component.html',
  styleUrls: ['./vend-go-rec.component.css']
})
export class VendGoRecComponent implements OnInit {
  vendGoRecArray:any;
  displayedColumns: string[] = [
    'CreatedBy',
    'Doc_Number',
    'Doc_Date',
    'Posting_Date',
    'Entry_Date',
    'Entry_Time',
  ];

  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:VendService) { }

  ngOnInit(): void {this.service.vend_go_rec().subscribe((data: any) => {
    console.log(data);
    this.vendGoRecArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_GO_REC_SK.Response']['HEADER_TABLE']['item'].slice(1);
    console.log(this.vendGoRecArray);
     var vendGoRecArray1 = this.vendGoRecArray.map((item:any)=>{
      return {
        CreatedBy: item.USERNAME['_text'],
        Doc_Number: item.MAT_DOC['_text'],
        Doc_Date: item.DOC_DATE['_text'],
        Posting_Date : item.PSTNG_DATE['_text'],
        Entry_Date: item.ENTRY_DATE['_text'],
        Entry_Time: item.ENTRY_TIME['_text'],
      };
    });
    console.log(vendGoRecArray1);
    
    this.dataSource = new MatTableDataSource(vendGoRecArray1);
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
