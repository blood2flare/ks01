import { Component, Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Wbs } from './wbs';

@Component({
    selector: 'c-wbs-tree',
    template: '/app/wbs/wbs-tree.component.html'
})
export class WbsTreeComponent {
    constructor(el: ElementRef, renderer: Renderer) {
        
    }
}