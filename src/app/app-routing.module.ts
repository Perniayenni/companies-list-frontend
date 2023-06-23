import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPageComponent } from './companies/pages/companies-page/companies-page.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesPageComponent },
  { path: '**', component: CompaniesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
