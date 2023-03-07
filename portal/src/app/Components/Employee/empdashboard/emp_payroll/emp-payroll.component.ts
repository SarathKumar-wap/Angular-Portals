import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpService } from '../../empservice/emp.service';

export interface UserData {
  Seq_No: any;
  Payroll_Period: any;
  Start_Date: any;
  End_Date: any;
  Pay_Date: any;
  Pay_Type_Text: any;
}

@Component({
  selector: 'app-emp-payroll',
  templateUrl: './emp-payroll.component.html',
  styleUrls: ['./emp-payroll.component.css']
})
export class EmpPayrollComponent implements OnInit {
  payrollArray:any;
  base64data:any;
  displayedColumns: string[] = [
    'Seq_No',
    'Payroll_Period',
    'Start_Date',
    'End_Date',
    'Pay_Date',
    'Pay_Type_Text',
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:EmpService) { }
  ngOnInit(): void {
    this.service.emp_payroll().subscribe((data: any) => {
      console.log(data);
      this.payrollArray = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_EMP_PAYROLL.Response']['RESULT']['item'];
      console.log(this.payrollArray);
       var payrollArray1 = this.payrollArray.map((item:any)=>{
        return {
          Seq_No: item.SEQUENCENUMBER['_text'],
          Payroll_Period: item.FPPERIOD['_text'], 
          Start_Date: item.FPBEGIN['_text'],
          End_Date : item.FPEND['_text'],
          Pay_Date: item.PAYDATE['_text'],
          Pay_Type_Text: item.PAYTYPE_TEXT['_text'],
        };
      });
      console.log(payrollArray1);
      
      this.dataSource = new MatTableDataSource(payrollArray1);
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
  // URL to PDF
public b64toBlob(b64Data: any, contentType: any) {
  contentType = contentType || '';
  let sliceSize = 512;
  var byteCharacters = atob(b64Data);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  var slice = byteCharacters.slice(offset, offset + sliceSize);
  var byteNumbers = new Array(slice.length);
  for (var i = 0; i < slice.length; i++) {
  byteNumbers[i] = slice.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  byteArrays.push(byteArray);
  }
  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
  }
  
  //pdfDownload
  pdfDownload(seqNo: any, payPeriod: any) {
  this.service.employee_payslip(seqNo, payPeriod).subscribe((data: any) => {
  console.log(data);
  //
  this.base64data = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_SK_EMP_PAYSLIP.Response']['PAYSLIP_DOC']['_text'];
  var blob = this.b64toBlob(this.base64data, 'application/pdf');
  let a = document.createElement('a');
  document.body.appendChild(a);
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = String(`payslip_${seqNo}.pdf`);
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
  
  });
  }
}

