import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@pages/home/home.component';

// Components

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./@pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./@pages/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./@pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'divulgacoes',
    loadChildren: () => import('./@pages/disclosures/disclosures.module').then(m => m.DisclosuresModule)
  },
  /*
  {
    path: 'contato',
    loadChildren: () => import('./@pages/contact/contact.module').then(m => m.ContactModule)
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
