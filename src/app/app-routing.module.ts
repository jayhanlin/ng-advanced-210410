import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },  // 首頁直接導去DashboardComponent 寫法1
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // 首頁直接導去DashboardComponent 寫法2
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }, //萬用路由，任何找不到Path都會進來此Component，且要放在最後，放上面時，會比對到，整個網站都會進NotFoundComponent
];//在此新增路由規則

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
