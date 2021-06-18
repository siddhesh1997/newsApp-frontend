import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FollowedTopicsComponent } from './followed-topics/followed-topics.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';


const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full' },
  { path:'home', component: HomeComponent,
    children:[
      // { path:'dashboard', component: DashboardComponent }
      { path:'topHeadlines', component: TopHeadlinesComponent },
      { path:'followedTopics', component: FollowedTopicsComponent,canActivate:[AuthGuard] }
  ]},
  { path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
