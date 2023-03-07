import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpService } from '../../empservice/emp.service';

export interface UserData {
  Emp_No: any;
  Valid_Begin: any;
  Valid_End: any;
  Absence_Type: any;
  Absence_Days: any;
  Absence_Hours: any;
}

@Component({
  selector: 'app-emp-leave',
  templateUrl: './emp-leave.component.html',
  styleUrls: ['./emp-leave.component.css']
})
export class EmpLeaveComponent implements OnInit { 
  leaveArray:any;
  displayedColumns: string[] = [
    'Emp_No',
    'Valid_Begin',
    'Valid_End',
    'Absence_Type',
    'Absence_Days',
    'Absence_Hours',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:EmpService) { }
  ngOnInit(): void {
    this.service.emp_leave().subscribe((data: any) => {
      console.log(data);
      this.leaveArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_LEAVE_REQ.Response']['RESULT']['item'];
      console.log(this.leaveArray);
       var leaveArray1 = this.leaveArray.map((item:any)=>{
        return {
          Emp_No: item.EMPLOYEENO['_text'],
          Valid_Begin: item.VALIDBEGIN['_text'], 
          Valid_End: item.VALIDEND['_text'],
          Absence_Type : item.NAMEOFABSENCETYPE['_text'],
          Absence_Days: item.ABSENCEDAYS['_text'],
          Absence_Hours: item.ABSENCEHOURS['_text'],
        };
      });
      console.log(leaveArray1);
      
      this.dataSource = new MatTableDataSource(leaveArray1);
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

