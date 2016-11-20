"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Patient = (function () {
    function Patient() {
    }
    return Patient;
}());
exports.Patient = Patient;
//<input [(ngModel)]="patient.nickName" placeholder="name">
//      <input [(ngModel)]="hero.passWord" placeholder="pass">
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Insulin Monitor';
        this.patient = {};
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            template: "\n    <h1>{{title}}</h1>\n    <h2> Login </h2>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"patient.nickName\" placeholder=\"User\u00B4s nickName\">\n    </div>\n    <div>\n      <label>pass: </label>\n      <input type=\"password\" [(ngModel)]=\"patient.passWord\" placeholder=\"User\u00B4s password\">\n    </div>\n    <div>\n        <button>Login</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map