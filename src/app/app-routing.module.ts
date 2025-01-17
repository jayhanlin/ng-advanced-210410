import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorComponent } from './utilities/color/color.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { Auth2Guard } from './auth2.guard';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },  // 首頁直接導去DashboardComponent 寫法1
  {
    path: '', component: LayoutComponent,
    // path: '', component: LayoutComponent, canActivateChild: [Auth2Guard], //更換成canActivateChild時，切換每一個Component時都會檢核Auth2Guard狀態
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // 首頁直接導去DashboardComponent 寫法2
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'utilities',
        children: [
          { path: 'color', component: ColorComponent, data: { seoTitle: 'N/A' } },
          {
            path: 'color/:type', component: ColorComponent,
            data: {
              seo: { title: 'Color', desc: '' }
            }
          },//:type必要參數，如沒給此參數會進404
        ]
      },
      { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
    ]
  },
  { path: 'login', component: LoginComponent },// 以範本為主的表單開發模式 Template-Driven Form
  { path: 'login2', component: Login2Component },// 以模型為主的表單開發模式 Reactive Forms(Model-Driven Form)
  { path: '**', component: NotFoundComponent }, //萬用路由，任何找不到Path都會進來此Component，且要放在最後，放上面時，會比對到，整個網站都會進NotFoundComponent
];//在此新增路由規則

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'corrected',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
