import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { NoticesComponent } from './notices/notices.component';
import { WaiterComponent } from './waiter/waiter.component';
import { CookComponent } from './cook/cook.component';
import { BartenderComponent } from './bartender/bartender.component';
import { CashdeskComponent } from './cashdesk/cashdesk.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RoleGuard } from './_guards/role.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'notices',
        component: NoticesComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["cash_desk", "waiter", "cook", "bartender"]
        }
      },
      {
        path: 'waiter',
        component: WaiterComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["waiter"]
        }
      },
      {
        path: 'cashdesk',
        component: CashdeskComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["cash_desk"]
        }
      },
      {
        path: 'cook',
        component: CookComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["cook"]
        }
      },
      {
        path: 'bartender',
        component: BartenderComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["bartender"]
        }
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["cash_desk"]
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ["cash_desk"]
        }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
