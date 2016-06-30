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
var user_1 = require('../model/user');
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    RegisterComponent.prototype.submit = function (user) {
        console.debug(user.email);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-component',
            templateUrl: 'app/register/register.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFNckM7SUFBQTtJQVdBLENBQUM7SUFQSSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sSUFBUztRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFkTjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSw0QkFBNEI7U0FDMUMsQ0FBQzs7eUJBQUE7SUFZRix3QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFkseUJBQWlCLG9CQVc3QixDQUFBIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVsL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZWdpc3Rlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgIFxuICAgICB1c2VyOlVzZXI7XG5cbiAgICAgbmdPbkluaXQoKXtcbiAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICB9XG5cbiAgICAgc3VibWl0KHVzZXI6VXNlcil7XG4gICAgICAgIGNvbnNvbGUuZGVidWcodXNlci5lbWFpbCk7XG4gICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
