import { Component } from '@angular/core';

@Component({
    selector: 'c-login',
    template: `
    <div class="login-container">
        <span class="title">Login</span>
        <div><span min-width="300px">Username</span><input #userName /></div>
        <div><span min-width="300px">Password</span><input #password /></div>
        <button (click)="doLogin(userName.value,password.value)">Submit</button>
    </div>
    
    `
})

export class LoginComponent {
    doLogin(uname, passw) {
        console.log('uname:'+uname+', passw:'+passw);
            
    }
}