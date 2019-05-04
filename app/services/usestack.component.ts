import { Component, OnInit  } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-use-stack',
    templateUrl: './usestack.component.html',
    providers:[StackService]
    // providers : [StackService]
})
export class UseStackComponent  implements OnInit {
    value : number; 
    length : number;

    // DI of StackService 
    constructor(private stack : StackService) { 

    }

    ngOnInit() {
        console.log("Stack length =" + this.stack.length());
    }

    pushValue(n: number) 
    {
        this.stack.push(n)
        this.length = this.stack.length();
    }

    popValue(n: number) 
    {
        this.value = this.stack.pop();
        this.length = this.stack.length();
    }
}
