import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { LoginComponent } from './login/login.component';
import { NewsReaderComponent } from './news-reader/news-reader.component';
import { NewsStoriesComponent } from './news-stories/news-stories.component';


export const routes: Routes = [
  // configure routes here
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuard],
    children:[
      {
        path: 'bookmarks',
        component: NewsReaderComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'trending',
        component: NewsStoriesComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: '',
        component: NewsReaderComponent,
        canActivate: [CanActivateGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
