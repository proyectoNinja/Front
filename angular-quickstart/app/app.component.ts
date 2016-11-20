import { Component } from '@angular/core';
export class Patient{
    nickName:string;
    passWord:string;
}
//<input [(ngModel)]="patient.nickName" placeholder="name">
//      <input [(ngModel)]="hero.passWord" placeholder="pass">
@Component({
  selector: 'my-login',
  template: `
    <h1>{{title}}</h1>
    <h2> Login </h2>
    <div>
      <label>name: </label>
      <input [(ngModel)]="patient.nickName" placeholder="User´s nickName">
    </div>
    <div>
      <label>pass: </label>
      <input type="password" [(ngModel)]="patient.passWord" placeholder="User´s password">
    </div>
    <div>
        <button>Login</button>
    `
    
})
export class AppComponent {
  title = 'Insulin Monitor';
  patient: Patient = {
    
  };
}
