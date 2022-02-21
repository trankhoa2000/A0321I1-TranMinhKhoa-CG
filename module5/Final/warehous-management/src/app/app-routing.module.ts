import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WarehousListComponent } from './warehous/warehous-list/warehous-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'warehouse-list', component: WarehousListComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
