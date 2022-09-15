import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PanelComponent } from './components/panel/panel.component';

  const routes: Routes = [
    {
      path: '',
          loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'admin',
          loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'undertakeshops',
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    ///
    {
      path: ':id',
      loadChildren: () => import('./modules/templates/ecommerce.module').then(m => m.EcommerceModule)
    },
    {
      path: 'panel',
      component: PanelComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: 'clients',
          loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule),
          canActivate: [AuthGuard], 
        },
       
        {
          path: 'sites',
          loadChildren: () => import('./modules/sites/sites.module').then(m => m.SitesModule),
          canActivate: [AuthGuard],
        },
        {
          path: 'products',
          loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
          canActivate: [AuthGuard],
        },
        {
          path: 'categorys',
          loadChildren: () => import('./modules/categorys/categorys.module').then(m => m.CategorysModule),
          canActivate: [AuthGuard],
        }, 
        {
          path: 'analytics',
          loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule),
          canActivate: [AuthGuard],
        },
        {
          path: 'qr',
          loadChildren: () => import('./modules/qr/qr.module').then(m => m.QrModule),
          canActivate: [AuthGuard],
        },
        {
          path: 'setting',
          loadChildren: () => import('./modules/setting/setting.module').then(m => m.SettingModule),
          canActivate: [AuthGuard],
        },
        {
          path: 'sendings',
          loadChildren: () => import('./modules/sendings/sendings.module').then(m => m.SendingsModule),
          canActivate: [AuthGuard],
        },
        {
          path: '**', redirectTo: '/panel/clients', pathMatch: 'full'
        }
      ]
    },
    ///
    {
      path: '**', redirectTo: '', pathMatch: 'full'
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
