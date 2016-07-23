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
var user_service_1 = require('../services/user.service');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var RegisterComponent = (function () {
    function RegisterComponent(userService, _fb) {
        this.userService = userService;
        this._fb = _fb;
        this.step = 1;
        this.submitted = false;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.events = [];
        RegisterComponent.That = this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', [common_1.Validators.required, common_1.Validators.pattern(this.emailRegex.source)]],
            password: ['', [common_1.Validators.required, common_1.Validators.minLength(6)]],
            password2: ['', [common_1.Validators.required]],
        });
    };
    RegisterComponent.prototype.save = function (user, isValid) {
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
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            templateUrl: 'register.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw2QkFBNEIsMEJBQzVCLENBQUMsQ0FEcUQ7QUFDdEQsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msc0JBQTZFLGdCQUFnQixDQUFDLENBQUE7QUFROUY7SUFTSSwyQkFBb0IsV0FBdUIsRUFBVSxHQUFnQjtRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFMcEUsU0FBSSxHQUFDLENBQUMsQ0FBQztRQUNQLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLHdKQUF3SixDQUFDO1FBQ3RLLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFHbEIsaUJBQWlCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUEsb0NBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQU0sbUJBQVUsQ0FBQyxRQUFRLEVBQU8sbUJBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFNLG1CQUFVLENBQUMsUUFBUSxFQUFPLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQU0sbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBR0QsZ0NBQUksR0FBSixVQUFLLElBQVMsRUFBRSxPQUFnQjtRQUFoQyxpQkFNQztRQUxFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDO0lBbkNOO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1lBQ3RDLFdBQVcsRUFBRSxlQUFlO1NBQzdCLENBQUM7O3lCQUFBO0lBK0JGLHdCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSx5QkFBaUIsb0JBOEI3QixDQUFBIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVsL3VzZXIvdXNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSdcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWdpc3Rlci1jb21wb25lbnQnLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgIFxuICAgICBwdWJsaWMgbXlGb3JtOiBGb3JtR3JvdXA7XG4gICAgIHVzZXI6VXNlcjtcbiAgICAgc3RlcD0xO1xuICAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgZW1haWxSZWdleCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICBldmVudHM6IGFueVtdID0gW107XG4gICAgIHN0YXRpYyBUaGF0OiBSZWdpc3RlckNvbXBvbmVudDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpeyBcbiAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LlRoYXQgPSB0aGlzO1xuICAgIH1cblxuICAgICBuZ09uSW5pdCgpe1xuICAgICAgIFxuICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZCwgPGFueT5WYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5lbWFpbFJlZ2V4LnNvdXJjZSldXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFs8YW55PlZhbGlkYXRvcnMucmVxdWlyZWQsIDxhbnk+VmFsaWRhdG9ycy5taW5MZW5ndGgoNildXSxcbiAgICAgICAgICAgIHBhc3N3b3JkMjogWycnLCBbPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIH0pXG4gICAgIH1cbiAgICAgXG5cbiAgICAgc2F2ZSh1c2VyOlVzZXIsIGlzVmFsaWQ6IGJvb2xlYW4peyAgXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXJVc2VyKHRoaXMudXNlcikudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgIGNvbnNvbGUud2FybigndXNlciBzYXZlZCEnKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
