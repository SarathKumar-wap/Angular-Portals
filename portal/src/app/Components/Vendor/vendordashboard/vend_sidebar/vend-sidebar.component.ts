import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendService } from '../../vendorservice/vend.service';

@Component({
  selector: 'app-vend-sidebar',
  templateUrl: './vend-sidebar.component.html',
  styleUrls: ['./vend-sidebar.component.css']
})
export class VendSidebarComponent implements OnInit {

  constructor(private router: Router, private service:VendService) { }

  ngOnInit(): void {
    if (!localStorage.getItem("uservendid")){
      this.router.navigate(['/vendorlogin']);
    }else{
      this.router.navigate(['/vendordashboard']);
    }
  }
  logout() {
    localStorage.removeItem("uservendid");
    this.router.navigate(['/vendorlogin']);
    this.service.success("Logout Successfull !");
  }

}
