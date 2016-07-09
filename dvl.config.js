var config = {
  appBaseAddress : 'http://localhost',
  apiServiceUrl : 'http://localhost:3000/api/',
  socketPort : 3000,
  socketHost : '127.0.0.1',
  env : global.process.env.NODE_ENV || 'development'
};

exports.config= config;

