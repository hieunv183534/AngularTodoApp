import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActionComponent } from './components/action/action.component';
import { ActionListComponent } from './components/action/action-list/action-list.component';
import { ActionDetailComponent } from './components/action/action-detail/action-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'action',
    component: ActionComponent,
    children: [
      { path: '', redirectTo: 'actionlist', pathMatch: 'full' },
      {
        path: 'actionlist', component: ActionListComponent
      },
      {
        path: 'actiondetail', component: ActionDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
