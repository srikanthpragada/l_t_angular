import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Product } from "./Product"

@Component({
    selector: 'st-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
    // input property 
    @Input() product : Product;
    @Input() id : number;

    // event 
    @Output() delete = new EventEmitter<number>();

    deleteProduct() {
       let resp = confirm("Do you really want to delete?") 
       if (resp) {
          // raise event and pass parameter 
          this.delete.emit(this.id);
       }
    }
}