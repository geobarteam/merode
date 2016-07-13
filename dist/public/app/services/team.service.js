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
require('rxjs/add/operator/toPromise');
var url_helper_1 = require('./url.helper');
var TeamService = (function () {
    function TeamService(http, urlHelper) {
        this.http = http;
        this.urlHelper = urlHelper;
        this.suffix = '/api/player'; // URL to web api
        this.url = this.urlHelper.GetUrl(this.suffix);
    }
    TeamService.prototype.getPlayers = function (teamName) {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.getPlayer = function (name) {
        return this.getPlayers('merode')
            .then(function (players) { return players.filter(function (player) { return player.name === name; })[0]; });
    };
    TeamService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_helper_1.UrlHelper])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JDLDJCQUEwQixjQUFjLENBQUMsQ0FBQTtBQUd6QztJQUlFLHFCQUFvQixJQUFVLEVBQVUsU0FBbUI7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEbkQsV0FBTSxHQUFHLGFBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUU5QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLFFBQWU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDbEIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBcEIsQ0FBb0IsQ0FBQzthQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsSUFBWTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDcEIsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWpELENBQWlELENBQUMsQ0FBQztJQUNqRixDQUFDO0lBR08saUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXpCSDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBMEJiLGtCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxtQkFBVyxjQXlCdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvdGVhbS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vbW9kZWwvcGxheWVyL3BsYXllcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgeyBVcmxIZWxwZXIgfSBmcm9tICcuL3VybC5oZWxwZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhbVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdXJsOnN0cmluZztcbiAgcHJpdmF0ZSBzdWZmaXggPSAnL2FwaS9wbGF5ZXInOyAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHVybEhlbHBlcjpVcmxIZWxwZXIpIHsgXG4gICAgICB0aGlzLnVybCA9IHRoaXMudXJsSGVscGVyLkdldFVybCh0aGlzLnN1ZmZpeCk7XG4gIH1cblxuICBnZXRQbGF5ZXJzKHRlYW1OYW1lOnN0cmluZyk6UHJvbWlzZTxQbGF5ZXJbXT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpXG4gICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKS5kYXRhKVxuICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0UGxheWVyKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldFBsYXllcnMoJ21lcm9kZScpXG4gICAgICAgICAgICAgICAudGhlbihwbGF5ZXJzID0+IHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIubmFtZSA9PT0gbmFtZSlbMF0pO1xuICB9XG5cbiAgXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
