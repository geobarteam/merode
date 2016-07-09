var config = require('./config')

export interface IConfig {
  appBaseAddress : string;
  apiServiceUrl: string;
  socketPort : number;
  socketHost : string;
  env : string;
}

export class AppConfig {
   public static Config = config.config;
}
