var application_root = __dirname,
express = require('express'), //Web Framework
path = require('path');//Utilities for dealing with file paths
//Create server
var app = express();
//Server Config
app.configure( function(){
	app.use(express.bodyParser({ keepExtensions: true, uploadDir: "uploads" }));
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(application_root));
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

var port = 4711;
app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

app.post("/upload", function (request, response) {
    console.log("file name", request.files.file.name);
    console.log("file path", request.files.file.path);
    response.send("upload complete");
});