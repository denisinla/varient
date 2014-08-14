var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 3000),
    server = module.exports = express();

server.configure(function () {
    server.use(express["static"](__dirname + "/../public"));
    server.use(express.errorHandler({
        dumpExceptions:true,
        showStack:true
    }));
    server.use(server.router);
});
// Start Node.js Server
http.createServer(server).listen(port);
console.log('Server Running');
