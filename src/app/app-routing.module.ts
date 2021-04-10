import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },  // 首頁直接導去DashboardComponent 寫法1
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // 首頁直接導去DashboardComponent 寫法2
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },

];//在此新增路由規則

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
