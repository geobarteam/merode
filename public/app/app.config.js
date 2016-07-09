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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var AppConfig = (function () {
    function AppConfig(http) {
        this.http = http;
    }
    AppConfig.prototype.Load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/app/config.json')
                .toPromise()
                .then(function (response) {
                _this.Configuration = response.json();
                resolve(true);
            })
                .catch(_this.handleError);
        });
    };
    ;
    AppConfig.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AppConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppConfig);
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map