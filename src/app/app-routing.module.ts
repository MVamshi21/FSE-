import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AuthGuard } from './guard/auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent, canActivate:[AuthGuard]},
  {path:'contact', component: ContactComponent, canActivate:[AuthGuard]},
  {path:'movie',component:MovieComponent, canActivate:[AuthGuard]},
 // {path:'ticket',component:TicketComponent},
  {path:'ticket/:id',component:TicketComponent},
  {path:'movie-details/:id',component:MovieDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:UserregistrationComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
