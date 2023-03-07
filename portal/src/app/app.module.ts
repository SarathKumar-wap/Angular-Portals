import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Customer/login/login.component';
import { DashboardComponent } from './Components/Customer/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/Customer/dashboard/sidebar/sidebar.component';
import { ProfileComponent } from './Components/Customer/dashboard/profile/profile.component';
import { InquiryComponent } from './Components/Customer/dashboard/inquiry/inquiry.component';
import { SaleorderComponent } from './Components/Customer/dashboard/saleorder/saleorder.component';
import { DeliveryComponent } from './Components/Customer/dashboard/delivery/delivery.component';
import { InvoiceComponent } from './Components/Customer/dashboard/invoice/invoice.component';
import { PaymentsagingComponent } from './Components/Customer/dashboard/paymentsaging/paymentsaging.component';
import { CrdbmemoComponent } from './Components/Customer/dashboard/crdbmemo/crdbmemo.component';
import { OverallComponent } from './Components/Customer/dashboard/overall/overall.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorloginComponent } from './Components/Vendor/vendorlogin/vendorlogin.component';
import { VendordashboardComponent } from './Components/Vendor/vendordashboard/vendordashboard.component';
import { VendCreditComponent } from './Components/Vendor/vendordashboard/vend_credit/vend-credit.component';
import { VendDebitComponent } from './Components/Vendor/vendordashboard/vend_debit/vend-debit.component';
import { VendDetailComponent } from './Components/Vendor/vendordashboard/vend_detail/vend-detail.component';
import { VendGoRecComponent } from './Components/Vendor/vendordashboard/vend_go_rec/vend-go-rec.component';
import { VendInvComponent } from './Components/Vendor/vendordashboard/vend_inv/vend-inv.component';
import { VendPayageComponent } from './Components/Vendor/vendordashboard/vend_payage/vend-payage.component';
import { VendPurorderComponent } from './Components/Vendor/vendordashboard/vend_purorder/vend-purorder.component';
import { VendReqQuoComponent } from './Components/Vendor/vendordashboard/vend_req_quo/vend-req-quo.component';
import { VendSidebarComponent } from './Components/Vendor/vendordashboard/vend_sidebar/vend-sidebar.component';
import { EmploginComponent } from './Components/Employee/emplogin/emplogin.component';
import { EmpdashboardComponent } from './Components/Employee/empdashboard/empdashboard.component';
import { EmpProfileComponent } from './Components/Employee/empdashboard/emp_profile/emp-profile.component';
import { EmpPayrollComponent } from './Components/Employee/empdashboard/emp_payroll/emp-payroll.component';
import { EmpPayslipComponent } from './Components/Employee/empdashboard/emp_payslip/emp-payslip.component';
import { EmpLeaveComponent } from './Components/Employee/empdashboard/emp_leave/emp-leave.component';
import { EmpSidebarComponent } from './Components/Employee/empdashboard/emp-sidebar/emp-sidebar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    ProfileComponent,
    InquiryComponent,
    SaleorderComponent,
    DeliveryComponent,
    InvoiceComponent,
    PaymentsagingComponent,
    CrdbmemoComponent,
    OverallComponent,
    VendorloginComponent,
    VendordashboardComponent,
    VendCreditComponent,
    VendDebitComponent,
    VendDetailComponent,
    VendGoRecComponent,
    VendInvComponent,
    VendPayageComponent,
    VendPurorderComponent,
    VendReqQuoComponent,
    VendSidebarComponent,
    EmploginComponent,
    EmpdashboardComponent,
    EmpProfileComponent,
    EmpPayrollComponent,
    EmpPayslipComponent,
    EmpLeaveComponent,
    EmpSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule, 
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
