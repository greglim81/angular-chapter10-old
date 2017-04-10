import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotifyComponent } from './spotify.component';
import { ArtistComponent } from './artist.component';

export const spotifyRouting = RouterModule.forChild([
  {path: 'spotify', component: SpotifyComponent},
  {path: 'spotify/artist/:id/:name', component: ArtistComponent}
]);
