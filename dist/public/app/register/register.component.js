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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQUMxQyw2QkFBNEIsMEJBRzVCLENBQUMsQ0FIcUQ7QUFRdEQ7SUFHSSwyQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFFM0MsQ0FBQztJQUlBLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxJQUFTO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBRUwsQ0FBQztJQXZCTjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZUFBZTtTQUM3QixDQUFDOzt5QkFBQTtJQW9CRix3QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlkseUJBQWlCLG9CQW1CN0IsQ0FBQSIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbC91c2VyL3VzZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTpVc2VyU2VydmljZSl7XG5cbiAgICB9XG5cbiAgICAgdXNlcjpVc2VyO1xuXG4gICAgIG5nT25Jbml0KCl7XG4gICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgfVxuXG4gICAgIHN1Ym1pdCh1c2VyOlVzZXIpe1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyVXNlcih1c2VyKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1c2VyIHNhdmVkIScpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
