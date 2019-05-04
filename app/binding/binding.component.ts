import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent  {
    photoUrl : string;
    cmdstr : string ;
    bold : boolean = true;
    big : boolean = true; 
    color:string = "blue"

    constructor() { 
        this.photoUrl = "http://www.srikanthtechnologies.com/logo.jpg"
        this.cmdstr = "Click"
    }

    showMouse(details) {
        console.log(details.x + ":" + details.y);
    }

    toggleBig() {
        this.big = !this.big; 
    }
   
}
