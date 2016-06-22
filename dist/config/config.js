"use strict";
var path = require('path');
var Config = (function () {
    function Config() {
    }
    Config.rootPath = path.normalize(__dirname + '/..');
    Config.env = process.env.NODE_ENV || 'development';
    Config.development = {
        root: Config.rootPath,
        app: {
            name: 'Merode'
        },
        port: process.env.PORT || 3000,
        mongoConnectionString: 'mongodb://localhost/merode',
    };
    Config.production = {
        root: Config.rootPath,
        app: {
            name: 'Merode'
        },
        port: process.env.PORT || 3000,
        mongoConnectionString: process.env.CUSTOMCONNSTR_MONGODB,
    };
    Config.current = Config[Config.env];
    return Config;
}());
exports.Config = Config;
;
