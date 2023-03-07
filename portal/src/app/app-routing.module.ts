import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Customer/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/Customer/dashboard/dashboard.component';
import { CrdbmemoComponent } from './Components/Customer/dashboard/crdbmemo/crdbmemo.component';
import { DeliveryComponent } from './Components/Customer/dashboard/delivery/delivery.component';
import { InquiryComponent } from './Components/Customer/dashboard/inquiry/inquiry.component';
import { InvoiceComponent } from './Components/Customer/dashboard/invoice/invoice.component';
import { OverallComponent } from './Components/Customer/dashboard/overall/overall.component';
import { PaymentsagingComponent } from './Components/Customer/dashboard/paymentsaging/paymentsaging.component';
import { ProfileComponent } from './Components/Customer/dashboard/profile/profile.component';
import { SaleorderComponent } from './Components/Customer/dashboard/saleorder/saleorder.component';
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
import { EmpLeaveComponent } from './Components/Employee/empdashboard/emp_leave/emp-leave.component';
import { EmpPayrollComponent } from './Components/Employee/empdashboard/emp_payroll/emp-payroll.component';
import { EmpPayslipComponent } from './Components/Employee/empdashboard/emp_payslip/emp-payslip.component';
import { EmpProfileComponent } from './Components/Employee/empdashboard/emp_profile/emp-profile.component';
import { EmpSidebarComponent } from './Components/Employee/empdashboard/emp-sidebar/emp-sidebar.component';
import { EmploginComponent } from './Components/Employee/emplogin/emplogin.component';
import { EmpdashboardComponent } from './Components/Employee/empdashboard/empdashboard.component';



const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'crdbmemo',component:CrdbmemoComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'inquiry',component:InquiryComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'overall',component:OverallComponent},
  {path:'paymentsaging',component:PaymentsagingComponent},
  {path:'profile',component:ProfileComponent},
  {path:'saleorder',component:SaleorderComponent}
]},
  {path:"vendorlogin",component:VendorloginComponent },
  {path:"vendordashboard",component:VendordashboardComponent, children:[
    {path:'vend_credit',component:VendCreditComponent},
    {path:'vend_debit',component:VendDebitComponent},
    {path:'vend_detail',component:VendDetailComponent},
    {path:'vend_go_rec',component:VendGoRecComponent},
    {path:'vend_inv',component:VendInvComponent},
    {path:'vend_payage',component:VendPayageComponent},
    {path:'vend_purorder',component:VendPurorderComponent},
    {path:'vend_req_quo',component:VendReqQuoComponent}

]},
{path:"emplogin", component:EmploginComponent},
{path:"empdashboard", component: EmpdashboardComponent, children:[
  {path:'emp_leave',component:EmpLeaveComponent},
  {path:'emp_payroll',component:EmpPayrollComponent},
  {path:'emp_payslip',component:EmpPayslipComponent},
  {path:'emp_profile',component:EmpProfileComponent}
]},
  


  {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
