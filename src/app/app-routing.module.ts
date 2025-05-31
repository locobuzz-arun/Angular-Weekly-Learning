import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { TodoComponent } from './todo/todo.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeadercomponentComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'header', component: HeadercomponentComponent },
  { path: 'login', component:LoginComponent},
  {path:'form',component:FormComponent},
  {path:'todo',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
