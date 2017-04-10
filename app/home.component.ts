import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>Home</h1>
        <button (click)="onClick()">Sign Up</button>
    `
})
export class HomeComponent  {

    constructor(private _router: Router){

    }

    onClick(){
        this._router.navigate(['signup']);
    }
}