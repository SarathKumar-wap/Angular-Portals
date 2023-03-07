import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustService } from '../../customerservice/cust.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router, private service:CustService) { }

  ngOnInit(): void {// authkey
    if (!localStorage.getItem("userid")) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
  logout() {
    localStorage.removeItem("userid");
    this.router.navigate(['/login']);
    this.service.success("Logout Successfull !");
  }
}
