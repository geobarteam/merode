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
var http_1 = require('@angular/http');
var url_helper_1 = require('./url.helper');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http, urlHelper) {
        this.http = http;
        this.urlHelper = urlHelper;
        this.suffix = '/api/user'; // URL to web api
        this.url = this.urlHelper.GetUrl(this.suffix);
    }
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_helper_1.UrlHelper])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsMkJBQTBCLGNBQWMsQ0FBQyxDQUFBO0FBQ3pDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQztJQUdJLHFCQUFvQixJQUFVLEVBQVUsU0FBbUI7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFGbkQsV0FBTSxHQUFHLFdBQVcsQ0FBQyxDQUFFLGlCQUFpQjtRQUc3QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBTkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQVFiLGtCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxtQkFBVyxjQU92QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci91c2VyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFVybEhlbHBlciB9IGZyb20gJy4vdXJsLmhlbHBlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdWZmaXggPSAnL2FwaS91c2VyJzsgIC8vIFVSTCB0byB3ZWIgYXBpXG4gICAgcHJpdmF0ZSB1cmw6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSB1cmxIZWxwZXI6VXJsSGVscGVyKSB7IFxuICAgICAgIHRoaXMudXJsID0gdGhpcy51cmxIZWxwZXIuR2V0VXJsKHRoaXMuc3VmZml4KTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
