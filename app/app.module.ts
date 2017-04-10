import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

import { routing } from './app.routing';
import { spotifyRouting } from './spotify/spotify.routing'

import { SpotifyModule } from './spotify/spotify.module';
import { UserModule } from './users/user.module';

import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent,     
    HomeComponent, 
    NotFoundComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,    
    SpotifyModule,
    UserModule,
    spotifyRouting,
    routing,
    ReactiveFormsModule   
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChangesGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }