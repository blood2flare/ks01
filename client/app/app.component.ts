import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class='app'>
        <c-top-header></c-top-header>
        <router-outlet></router-outlet>
        <c-page-footer></c-page-footer>
    </div>
    `
})

export class AppComponent {
    
}