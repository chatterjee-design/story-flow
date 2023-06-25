// middleware.js

const exampleMiddleware = (devServer) => {
    // Perform custom logic here
    console.log('Custom middleware executed');
  };
  
  module.exports = function (devServer) {
    // Add your custom middleware functions using the `use` method of the `devServer` object
    devServer.use(exampleMiddleware);
  };
  