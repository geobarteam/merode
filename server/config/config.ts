import * as path from 'path';

export interface IAppConfig
{
    name:string;
}
export interface IConfigEnv
{
    root: string;
    app: IAppConfig;
    port: number;
    mongoConnectionString: string;
}

export class Config {
    static rootPath = path.normalize(__dirname + '/..');
    static env = process.env.NODE_ENV || 'development';
    static development= {
        root: Config.rootPath,
        app: {
        name: 'Merode'
        },
        port: process.env.PORT || 3000,
        mongoConnectionString: 'mongodb://localhost/merode',
    };
    static production= {
        root: Config.rootPath,
        app: {
        name: 'Merode'
        },
        port: process.env.PORT || 3000,
        mongoConnectionString: process.env.CUSTOMCONNSTR_MONGODB,
    }
    static current:IConfigEnv = Config[Config.env];
};
