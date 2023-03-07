import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../../empservice/emp.service';

@Component({
  selector: 'app-emp-sidebar',
  templateUrl: './emp-sidebar.component.html',
  styleUrls: ['./emp-sidebar.component.css']
})
export class EmpSidebarComponent implements OnInit {

  constructor(private router:Router,private service:EmpService) { }

  ngOnInit(): void {
    if (!localStorage.getItem("userempid")){
      this.router.navigate(['/emplogin']);
    }else{
      this.router.navigate(['/empdashboard']);
    }
  }
  logout() {
    localStorage.removeItem("userempid");
    this.router.navigate(['/emplogin']);
    this.service.success("Logout Successfull !");
  }

}
