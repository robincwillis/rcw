---
layout: post
title: "Webgl Stage"
tags: webgl javascript 3d
published: true
description: A simple stage for viewing 3d models in WebGL
---
When i was working at Sunglass our whole app was based around WebGL and the ability for people to load complex 3d models and view them on the browser. For debugging and testing I wrote [WebGLStage](http://robincwillis.github.io/WebGLStage/). It accepts any format three.js accepts, .json, .json.bin, .obj, .dae, .stl etc. Uses an ajax request to load the models, so if you are running this locally you will need to open it from a web server or your likely to have a security issue.

###[WebGLStage](http://robincwillis.github.io/WebGLStage/)