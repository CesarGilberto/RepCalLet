import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('../pages/notes/notes.module').then(m => m.NotesPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../pages/productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('../pages/servicios/servicios.module').then(m => m.ServiciosPageModule)
      },  
      {
        path: 'tab4',
        loadChildren: () => import('../pages/tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/notes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
