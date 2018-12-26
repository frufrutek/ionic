import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'posamezna/:id', loadChildren: './prenos_podatkov/posamezna/posamezna.module#PosameznaPageModule' },
  { path: 'brskanje', loadChildren: './brskanje/brskanje.module#BrskanjePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
