
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-directives',
    templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {
    langs : string[] = ['Python','Java','C#','TypeScript']
    
    etype : string = "p";

    constructor() { }

    ngOnInit(): void { }
}
