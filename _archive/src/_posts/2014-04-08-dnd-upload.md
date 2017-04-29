---
layout: post
title: "HTML5 Drag and Drop Uploads"
tags: html5 javascript file upload
published: true
description: A super bare bones example of how to implement drag and drop file uploads
---


You want people to upload files to your site. This is traditionally done through the  `input` tag. but it a pain to style and kinda unreasonable to ask people to use it these days.

Luckily HTML5 has some really cool API's, namely the File API, the FileReader API, and the FormData API that allow for drag and drop uploads and much more. Since we should always use HTML5's functionality when supported, lets code up a super bare bones drag and drop file uploading interface that we can easily plug in whenever file uploads are needed in a project.

<div class="center">
	<p>You can check out what we will be making here</p>
	<a href="{{site.data.s3.demo}}dnd-upload/" target="_blank" class="btn btn-large">Demo</a>
</div>

<div class="center">
	<p>Or if you just want the code...</p>
	<a href="{{site.data.s3.demo}}dnd-upload/dnd-upload.zip" target="_blank" class="btn btn-large">Source</a>
</div>

<!--more-->

First lets start with the markup.

~~~~html
<div id="dropzone">
	<p>Drag and drop images from your desktop.</p>
</div>
<progress id="upload-progress" min="0" max="100" value="0"></progress>
<div id="preview"></div>
<div id="upload" class="hidden">
	<label>Drag and drop not supported, use this field:</label>
	<input type="file">
</div>
~~~~

the interface consists of an area which people can drag images too, progress bar to show the upload progress, a preview area to display the uploaded file, and a file input field to fall back to.


Great, let's add some minimal styling for the sake of the demo.

~~~~css
#dropzone {
	background-color: #eee;
	outline: 1px solid #ccc;
	margin: 20px auto;
	text-align: center;
	padding: 100px 0;
	border: 10px solid transparent;
}
#dropzone.hover {
	border: 10px dashed #0c0;
}
progress {
	width: 100%;
}
#preview img {
	display: block;
	margin: 10px auto;
	max-width: 100%;
}
.hidden {
	display: none !important;
}
~~~~

Ok lets dive into the functionality. I'll be using jQuery for simplicity.
First, lets get references to all the elements we need.

~~~~javascript
var $dropzone = $('#dropzone');
var $progress = $('#upload-progress');
var $preview = $('#preview');
var $fileupload = $('#upload');
~~~~

Lets check to see if it supported and add some simple validations for content-type. Note: you can and should do more robust checks for support and validation.

~~~~javascript
var support = 'draggable' in  $dropzone[0];
var acceptedTypes = {
	'image/png': true,
	'image/jpeg': true,
	'image/gif': true
};
~~~~

Now lets bind our events. One caveat. Jquery doesn't support mouse drag events. So we are going to bind them with plain old javascript to keep things simple.

~~~~javascript
if (support){
	$dropzone[0].ondragover = function (e){
		$dropzone.addClass('hover');
		return false;
	};
	$dropzone[0].ondragleave = function(e){
		$dropzone.removeClass('hover');
		return false;
	};
	$dropzone[0].ondragend = function(e){
		$dropzone.removeClass('hover');
		return false;
	};
	$dropzone[0].ondrop = function(e){
		$dropzone.removeClass('hover');
		e.preventDefault();
		readfiles(e.dataTransfer.files);
	}
}else{
	$dropzone.addClass('hidden');
	$progress.addClass('hidden');
	$fileupload.removeClass('hidden');
}
~~~~

so basically we are checking if drag and drop is supported and then binding our drag events to the `#dropzone` element. The first three just control the style of the element and the last one calls a function `readfiles` passing the files dropped on the element. If drag and drop isn't supported, then hide our interface and show the fallback. Ok lets write this read files function.

~~~~javascript
function readfiles(files){
	var formData = new FormData();
	for(var i=0;i< files.length;i++){
		if (acceptedTypes[files[i].type] === true){
			formData.append('file', files[i]);
			previewfile(files[i]);
		}
	}
}
~~~~

So this function is checking if each of the files passes validation and if so adding it to a form data object. Then it is passing that file to a function called `previewfile`. Lets write that function

~~~~javascript
function previewfile(file){
	var reader = new FileReader();
	reader.onload = function(event){
		console.log('reader loaded');
		var image = new Image();
		image.src = event.target.result;
		$preview.append(image);
	};
	reader.readAsDataURL(file);
}
~~~~

Pretty simple. We create a FileReader object pass it the url of the file, then create a new image object based on that url and append it to the preview element. So that's all good but we're still not actually uploading our file to the server. So lets go back to the `readfiles` function and add that.

~~~~javascript
function readfiles(files){
	var formData = new FormData();
	for(var i=0;i< files.length;i++){
		if (acceptedTypes[files[i].type] === true){
			formData.append('file', files[i]);
			previewfile(files[i]);
		}
	}
	$.ajax({
			type: "POST",
			url: '/upload',
			data: formData,
			processData: false,
			contentType: false,
			xhr: function(){
				var xhr = new window.XMLHttpRequest();
				xhr.upload.addEventListener("progress", function(e){
					if (e.lengthComputable) {
						var percentComplete = (e.loaded / e.total) * 100;
						$progress.val(percentComplete);
			    }
			  }, false);
			  return xhr;
			},
			success: function(data){ console.log(data); },
		});
}
~~~~

So now in addition to previewing the files we are posting them to the server with an ajax request, add a listener to that request to update our progress bar and then just sending the response to the console. In this case the endpoint we are posting to is '/upload', but you need to coordinate that as well as how the response should be handled depending on your backend setup. I don't want to go into the backend part but here's a little bit

Right now all our code is client side, but in order to actually upload a file to some server we need something server side to process the file. If we really want to see this work, we can write up a quick node server to process the uploads.

~~~~javascript
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
~~~~

I don't want to get into Node right now, but I also don't want to leave people hanging so really quick to get the node server running.
1. Download the source.
2. Make sure <a href="nodejs.org" target="_blank">Node.js</a> is installed.
3. cd into the directory and run

~~~~~
npm install; node server.js
~~~~~

you should now be able to see the example at

http://localhost:4711
