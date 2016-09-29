import { Component } from '@angular/core';

@Component({
    selector: 'c-top-header',
    template: `
    <div class="top-header">
        <div class="top-app-title">Kencana Sewu</div>
        <div class="top-user-area">
            User Area
        </div>
    </div>
    <nav>
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/wbs/1']">Wbs</a>
        <a [routerLink]="['/material']">Material</a>
        <a [routerLink]="['/po']">Purchase Order</a>
    </nav>`
})
export class TopHeaderComponent {

}