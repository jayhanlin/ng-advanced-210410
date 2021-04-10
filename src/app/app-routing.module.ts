import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorComponent } from './utilities/color/color.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },  // 首頁直接導去DashboardComponent 寫法1
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // 首頁直接導去DashboardComponent 寫法2
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'utilities',
    children: [
      { path: 'color', component: ColorComponent , data: { seoTitle: 'N/A' } },
      { path: 'color/:type', component: ColorComponent ,
      data: {
        seo: {title:'Color', desc: ''}
      }
    },//:type必要參數，如沒給此參數會進404
    ]
  },
  { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', component: NotFoundComponent }, //萬用路由，任何找不到Path都會進來此Component，且要放在最後，放上面時，會比對到，整個網站都會進NotFoundComponent
];//在此新增路由規則

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
