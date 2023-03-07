import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendService } from '../../vendorservice/vend.service';

export interface UserData {
  Vendor: any;
  Po_Number: any;
  Doc_Condition : any;
  Export_No: any;
  Created_On: any;
  Created_By: any;
}
@Component({
  selector: 'app-vend-purorder',
  templateUrl: './vend-purorder.component.html',
  styleUrls: ['./vend-purorder.component.css']
})
export class VendPurorderComponent implements OnInit {
  vendPOArray:any;
  displayedColumns: string[] = [
    'Vendor',
    'Po_Number',
    'Doc_Condition',
    'Export_No',
    'Created_On',
    'Created_By',
  ];

  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:VendService) { }

  ngOnInit(): void {
    this.service.vend_purorder().subscribe((data: any) => {
      console.log(data);
      this.vendPOArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PO_SK.Response']['HEADER_TABLE']['item'];
      console.log(this.vendPOArray);
       var vendPOArray1 = this.vendPOArray.map((item:any)=>{
        return {
          Vendor: item.VENDOR['_text'],
          Po_Number: item.PO_NUMBER['_text'],
          Doc_Condition: item.DOC_COND['_text'],
          Export_No : item.EXPORT_NO['_text'],
          Created_On: item.CREATED_ON['_text'],
          Created_By: item.CREATED_BY['_text'],
        };
      });
      console.log(vendPOArray1);
      
      this.dataSource = new MatTableDataSource(vendPOArray1);
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
