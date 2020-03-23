import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JikeCardComponent } from './pages/jike-card/jike-card.component';
import { JikeBaseComponent } from './pages/jike-base/jike-base.component';


const routes: Routes = [
  {
    path: 'jike',
    component: JikeBaseComponent,
    children: [
      {
        path: 'card',
        component: JikeCardComponent
      },
      { path: '**', redirectTo: 'card', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'jike', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
