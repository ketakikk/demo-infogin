import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';


CompanyDetailsComponent
const routes: Routes = [
  { path: 'company', component: CompanyDetailsComponent },
  { path: 'contacts', component: EmpListComponent },
  { path: '',redirectTo: 'company',pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
