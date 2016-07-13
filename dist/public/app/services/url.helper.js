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
var UrlHelper = (function () {
    function UrlHelper() {
    }
    UrlHelper.prototype.GetUrl = function (suffix) {
        if (window.location.href.startsWith(UrlHelper.LITEURL)) {
            return "http://localhost:3000" + suffix;
        }
        return suffix;
    };
    UrlHelper.LITEURL = "http://localhost:8000";
    UrlHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UrlHelper);
    return UrlHelper;
}());
exports.UrlHelper = UrlHelper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91cmwuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFHOUM7SUFBQTtJQVdBLENBQUM7SUFQUywwQkFBTSxHQUFkLFVBQWUsTUFBYTtRQUMxQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0RCxNQUFNLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDO1FBQzFDLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFSTSxpQkFBTyxHQUFJLHVCQUF1QixDQUFDO0lBSDVDO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUFZYixnQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksaUJBQVMsWUFXckIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvdXJsLmhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVybEhlbHBlciB7XG4gIFxuICBzdGF0aWMgTElURVVSTCA9ICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiOyBcblxuICBwdWJsaWMgIEdldFVybChzdWZmaXg6c3RyaW5nKXtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChVcmxIZWxwZXIuTElURVVSTCkpe1xuICAgICAgcmV0dXJuIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIgKyBzdWZmaXg7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdWZmaXg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
