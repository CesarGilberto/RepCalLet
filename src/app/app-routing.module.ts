import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard, CanDeActivateViaAuthGuard } from './guards/permissions';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [CanDeActivateViaAuthGuard]
  },
    {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [CanActivateViaAuthGuard]

  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule),
    canActivate: [CanDeActivateViaAuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate: [CanDeActivateViaAuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./pages/movimientos/movimientos.module').then( m => m.MovimientosPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'ventas',
    loadChildren: () => import('./pages/ventas/ventas.module').then( m => m.VentasPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'cotizaciones',
    loadChildren: () => import('./pages/cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },
  {
    path: 'cortecaja',
    loadChildren: () => import('./pages/cortecaja/cortecaja.module').then( m => m.CortecajaPageModule)
  },
  {
    path: 'detalle-nota',
    loadChildren: () => import('./pages/detalle-nota/detalle-nota.module').then( m => m.DetalleNotaPageModule)
  },
  {
    path: 'detalle-venta',
    loadChildren: () => import('./pages/detalle-venta/detalle-venta.module').then( m => m.DetalleVentaPageModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./pages/empleados/empleados.module').then( m => m.EmpleadosPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
