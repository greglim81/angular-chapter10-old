import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { UserFormComponent } from './users/user-form.component';
import { LoginComponent } from './login.component';

import {AuthGuard} from './auth-guard.service';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: UserFormComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
  {path: '**', component: NotFoundComponent}  
]);