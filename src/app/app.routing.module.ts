import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(item => item.MainModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(item => item.DetailsModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
