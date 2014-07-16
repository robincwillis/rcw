---
layout: post
title: "Mobile Touch Events"
tags: jekyll
published: false
---


<html>
  <head>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <meta charset=utf-8 />
  <!-- disable zooming -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no " >
<script>
var log = function(msg) {
  return function(e) {
   var pre = $("pre");
    pre.append("EVENT (" + new Date().getTime() + "): "  + msg + "\n");
   if(e.originalEvent.type == "touchmove") e.preventDefault();
   pre[0].scrollTop = pre.height();
  };
};

$(function() {
  $("div").on("mousedown", log("mousedown"));
  $("div").on("mouseup", log("mouseup"));
  $("div").on("click", log("click"));
  $("div").on("dblclick", log("dblclick"));
  $("div").on("context", log("context"));
  $("div").on("touchstart", log("touchstart"));
  $("div").on("touchcancel", log("touchcancel"));
  $("div").on("touchmove", log("touchmove"));
  $("div").on("touchleave", log("touchleave"));
  $("div").on("touchend", log("touchend"));
});
</script>
<style>
div {
 border: solid 1px black;
 padding: 10px;
 margin: 10px;
 background-color: black;
 color: white;
 cursor: pointer;
 text-align: center;
 text-transform: uppercase;
 height: 200px;
 vertical-align: middle;
}

#edit-with-js-bin {
 display: none;
}

pre {
 box-shadow: inset 0px 0px 5px black;
 height: 200px;
 overflow-y: auto
}

img ~ .content {
  display:none;
}

img:hover ~ .content {
  display:block;
}


</style>
</head>
<body>
<div>Can touch this</div>
<h2>Output</h2>
<pre></pre>

<img src="/awesome.png">
<div class="content">This is an awesome picture of me</div>
</body>
</html>
