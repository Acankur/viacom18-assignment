import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  // {
  //   path: 'add',
  //   component: AddItemsComponent,
  // },
  // {
  //   path: 'list',
  //   component: ListItemsComponent,
  // }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
