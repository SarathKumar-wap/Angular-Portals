import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustService } from '../../customerservice/cust.service';


export interface UserData {
  Delivery: any;
  EntryTime: any;
  CreatedOn: any;
  LoadingDate: any;
  DeliveryDate: any;
  CreatedBy: any;
}

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliveryArray:any;
  displayedColumns: string[] = [
    'Delivery',
    'EntryTime',
    'CreatedOn',
    'LoadingDate',
    'DeliveryDate',
    'CreatedBy',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:CustService) { }

  ngOnInit(): void {this.service.delivery().subscribe((data: any) => {
    console.log(data);
    this.deliveryArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_CP_DELIVERY.Response']['IT_DELIVERY_LIST']['item'].slice(1);
    console.log(this.deliveryArray);
     var deliveryArray1 = this.deliveryArray.map((item:any)=>{
      return {
        Delivery: item.VBELN['_text'],
        EntryTime: item.ERZET['_text'],
        CreatedOn: item.ERDAT['_text'],
        LoadingDate : item.LDDAT['_text'],
        DeliveryDate: item.LFDAT['_text'],
        CreatedBy: item.ERNAM['_text'],
      };
    });
    console.log(deliveryArray1);
    
    this.dataSource = new MatTableDataSource(deliveryArray1);
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