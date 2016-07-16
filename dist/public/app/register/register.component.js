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
var user_service_1 = require('../services/user.service');
var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.step = 1;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    RegisterComponent.prototype.submit = function (user) {
        this.userService.registerUser(user).then(function (result) {
            console.warn('user saved!');
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-component',
            templateUrl: 'register.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQUMxQyw2QkFBNEIsMEJBRzVCLENBQUMsQ0FIcUQ7QUFRdEQ7SUFLSSwyQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFGMUMsU0FBSSxHQUFDLENBQUMsQ0FBQztJQUlSLENBQUM7SUFJQSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sSUFBUztRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUM7SUF6Qk47UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGVBQWU7U0FDN0IsQ0FBQzs7eUJBQUE7SUFzQkYsd0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHlCQUFpQixvQkFxQjdCLENBQUEiLCJmaWxlIjoiYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci91c2VyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJ1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgIHVzZXI6VXNlcjtcbiAgICAgc3RlcD0xO1xuICAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKXtcblxuICAgIH1cblxuICAgICBcblxuICAgICBuZ09uSW5pdCgpe1xuICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgIH1cblxuICAgICBzdWJtaXQodXNlcjpVc2VyKXtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3RlclVzZXIodXNlcikudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgIGNvbnNvbGUud2FybigndXNlciBzYXZlZCEnKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
