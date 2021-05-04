import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'', redirectTo:'/bilioteca/home', pathMatch:'full'},
  {path: 'bilioteca', loadChildren: () => import('./user/user.module').then(m => m.AuthModule)}, 
  ]  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
