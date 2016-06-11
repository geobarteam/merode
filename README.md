This application is based on the Angular2 Tour of Heroes tutorial but extended with NodeJs and MongoDB. 

The example is an ideal starting place to build applications on a nice development stack made of :

Angular2 for the fronted application
Node.js: as backend web server.
LiteServer: This server should not be used for production but only during the development. LiteServer is specifically designed for serving static pages during the development.  It refresh the browser every time a file is saved.
Express: to serve the static pages in production.
MongoDB & Mongoose: Document database technology.  Mongoose is the client side library enabling to interact with MongoDB .
TypeScript: for providing the type safety.
Gulp: it’s used to automate all sort of development tasks like copying files or cleaning the typescript compile output.
To startup the application in development mode just type: “npm start”.