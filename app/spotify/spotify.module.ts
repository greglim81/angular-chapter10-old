import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { SpotifyComponent }   from './spotify.component';
import { ArtistComponent }      from './artist.component';
import { SpotifyService }         from './spotify.service';

@NgModule({
    imports: [                                 
        CommonModule,        
        ReactiveFormsModule,        
        HttpModule,
        RouterModule     
    ],
    declarations: [
        SpotifyComponent, 
        ArtistComponent
    ],
    exports: [
    ],
    providers: [
        SpotifyService        
    ]
})
export class SpotifyModule { 
}