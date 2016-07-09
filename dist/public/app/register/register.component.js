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
var user_1 = require('../model/user/user');
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    RegisterComponent.prototype.submit = function (user) {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-component',
            templateUrl: 'register.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQVExQztJQUFBO0lBV0EsQ0FBQztJQVBJLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxJQUFTO0lBRWhCLENBQUM7SUFmTjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZUFBZTtTQUM3QixDQUFDOzt5QkFBQTtJQVlGLHdCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoiYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci91c2VyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWdpc3Rlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgXG4gICAgIHVzZXI6VXNlcjtcblxuICAgICBuZ09uSW5pdCgpe1xuICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgIH1cblxuICAgICBzdWJtaXQodXNlcjpVc2VyKXtcbiAgICAgICAgXG4gICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
