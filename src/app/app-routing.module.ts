import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 {
  path: 'notifications',
  loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent)
},
{
  path: 'profile',
  loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
},
{
  path: 'answer',
  loadComponent: () => import('./answer/answer.component').then(m => m.AnswerComponent)
},
{
  path: 'create-post',
  loadComponent: () => import('./create-post/create-post.component').then(m => m.CreatePostComponent)
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
