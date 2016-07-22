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
        this.submitted = false;
    }
    Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.registerUser(this.user).then(function (result) {
            console.warn('user saved!');
            _this.submitted = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQUMxQyw2QkFBNEIsMEJBRzVCLENBQUMsQ0FIcUQ7QUFRdEQ7SUFNSSwyQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFIMUMsU0FBSSxHQUFDLENBQUMsQ0FBQztRQUNQLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJbkIsQ0FBQztJQUVELHNCQUFJLHlDQUFVO2FBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFckQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUM7SUEzQk47UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGVBQWU7U0FDN0IsQ0FBQzs7eUJBQUE7SUF3QkYsd0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHlCQUFpQixvQkF1QjdCLENBQUEiLCJmaWxlIjoiYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci91c2VyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJ1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgIHVzZXI6VXNlcjtcbiAgICAgc3RlcD0xO1xuICAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2Upe1xuXG4gICAgfVxuXG4gICAgZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpOyB9XG5cbiAgICAgbmdPbkluaXQoKXtcbiAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICB9XG5cbiAgICAgb25TdWJtaXQoKXsgIFxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyVXNlcih0aGlzLnVzZXIpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VzZXIgc2F2ZWQhJyk7XG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
