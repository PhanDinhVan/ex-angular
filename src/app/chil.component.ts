import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-child',
    // template: `<button (click)="addForParent()" >Add</button>
    // <button (click)="subForParent()" >Sub</button>`
    template: `<h3> {{ value }} </h3>`
})

export class ChilComponent {
    value = 0;
    // @Output() myClick = new EventEmitter();
    // addForParent() {
    //     this.myClick.emit(true);
    // }

    // subForParent() {
    //     this.myClick.emit(false);
    // }
}