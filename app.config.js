"use strict";
var config = require('./config');
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.Config = config.config;
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map