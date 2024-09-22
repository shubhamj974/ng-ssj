import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGaurd } from './shared/services/auth.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { UserResolverGuard } from './shared/services/userResolver.guard';
import { DeactivateGuard } from './shared/services/deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGaurd],
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGaurd],
  },

  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      msg: 'Page Not Found',
    },
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
