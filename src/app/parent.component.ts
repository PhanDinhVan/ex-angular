import { Component, ViewChild } from '@angular/core';
import { ChilComponent } from './chil.component';

@Component ({
    selector: 'app-parent',
    // template: `<h3> {{value}} </h3>
    //     <app-chil (myClick)="changeValue($event)" ></app-chil>`
    template: `<button (click)="onAddForChil()" >Add for chil</button>
                <app-child></app-child>`
})

export class ParentComponent {
    // value = 0;
    // changeValue(isAdd: boolean) {
    //     if(isAdd) {
    //         this.value = this.value + 1;
    //     } else {
    //         this.value = this.value - 1;
    //     }
        
    // }

    @ViewChild(ChilComponent)
    myChil: ChilComponent;

    onAddForChil() {
        this.myChil.value++;
    }
}