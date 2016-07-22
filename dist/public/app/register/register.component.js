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
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', [common_1.Validators.required, common_1.Validators.pattern(this.emailRegex.source)]],
            password: ['', [common_1.Validators.required, common_1.Validators.minLength(5)]],
        });
        this.subcribeToFormChanges();
    };
    RegisterComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        var myFormStatusChanges$ = this.myForm.statusChanges;
        var myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(function (x) { return _this.events.push({ event: 'STATUS_CHANGED', object: x }); });
        myFormValueChanges$.subscribe(function (x) { return _this.events.push({
            event: 'VALUE_CHANGED', object: x
        }); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw2QkFBNEIsMEJBQzVCLENBQUMsQ0FEcUQ7QUFDdEQsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msc0JBQThFLGdCQUFnQixDQUFDLENBQUE7QUFRL0Y7SUFTSSwyQkFBb0IsV0FBdUIsRUFBVSxHQUFnQjtRQUFqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFMcEUsU0FBSSxHQUFDLENBQUMsQ0FBQztRQUNQLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLHdKQUF3SixDQUFDO1FBQ3RLLFdBQU0sR0FBVSxFQUFFLENBQUM7SUFFb0QsQ0FBQztJQUV4RSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN4QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxtQkFBVSxDQUFDLFFBQVEsRUFBTyxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEYsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQU0sbUJBQVUsQ0FBQyxRQUFRLEVBQU8sbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRSxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBQ0QsaURBQXFCLEdBQXJCO1FBQUEsaUJBT0E7UUFORyxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDckQsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQXhELENBQXdELENBQUMsQ0FBQztRQUM5RixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNsRCxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ2xDLENBQUMsRUFGaUMsQ0FFakMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVBLGdDQUFJLEdBQUosVUFBSyxJQUFTLEVBQUUsT0FBZ0I7UUFBaEMsaUJBTUM7UUFMRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBRUwsQ0FBQztJQXhDTjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN0QyxXQUFXLEVBQUUsZUFBZTtTQUM3QixDQUFDOzt5QkFBQTtJQW9DRix3QkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1kseUJBQWlCLG9CQW1DN0IsQ0FBQSIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbC91c2VyL3VzZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyLWNvbXBvbmVudCcsXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgXG4gICAgIG15Rm9ybTogRm9ybUdyb3VwO1xuICAgICB1c2VyOlVzZXI7XG4gICAgIHN0ZXA9MTtcbiAgICAgc3VibWl0dGVkID0gZmFsc2U7XG4gICAgIGVtYWlsUmVnZXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgZXZlbnRzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTpVc2VyU2VydmljZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyKXsgfVxuXG4gICAgIG5nT25Jbml0KCl7XG4gICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBlbWFpbDogWycnLCBbPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLCA8YW55PlZhbGlkYXRvcnMucGF0dGVybih0aGlzLmVtYWlsUmVnZXguc291cmNlKV1dLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZCwgPGFueT5WYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV1dLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnN1YmNyaWJlVG9Gb3JtQ2hhbmdlcygpO1xuICAgICAgICBcbiAgICAgfVxuICAgICBzdWJjcmliZVRvRm9ybUNoYW5nZXMoKSB7XG4gICAgICAgIGNvbnN0IG15Rm9ybVN0YXR1c0NoYW5nZXMkID0gdGhpcy5teUZvcm0uc3RhdHVzQ2hhbmdlcztcbiAgICAgICAgY29uc3QgbXlGb3JtVmFsdWVDaGFuZ2VzJCA9IHRoaXMubXlGb3JtLnZhbHVlQ2hhbmdlcztcbiAgICAgICAgbXlGb3JtU3RhdHVzQ2hhbmdlcyQuc3Vic2NyaWJlKHggPT4gdGhpcy5ldmVudHMucHVzaCh7IGV2ZW50OiAnU1RBVFVTX0NIQU5HRUQnLCBvYmplY3Q6IHggfSkpO1xuICAgICAgICBteUZvcm1WYWx1ZUNoYW5nZXMkLnN1YnNjcmliZSh4ID0+IHRoaXMuZXZlbnRzLnB1c2goeyBcbiAgICAgICAgICBldmVudDogJ1ZBTFVFX0NIQU5HRUQnLCBvYmplY3Q6IHggXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAgc2F2ZSh1c2VyOlVzZXIsIGlzVmFsaWQ6IGJvb2xlYW4peyAgXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXJVc2VyKHRoaXMudXNlcikudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgIGNvbnNvbGUud2FybigndXNlciBzYXZlZCEnKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
