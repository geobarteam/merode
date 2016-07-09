var config = {
  appBaseAddress : 'http://merode.azurewebsites.net/',
  apiServiceUrl : '/api/',
  socketPort : process.env.port,
  socketHost : '8.8.8.8',
  env : global.process.env.NODE_ENV || 'production'
};

exports.config= config;