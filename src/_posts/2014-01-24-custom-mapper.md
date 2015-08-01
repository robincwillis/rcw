---
layout: post
title: "Custom Mapper"
tags: google maps javascript
published: true
description : Often times projects demanded the same degree of customization and behavior from Google Maps in terms of Appearance.
---

![Custom Mapper]({{site.data.s3.blog}}custom-mapper-ui.png)


Often times projects demanded the same degree of customization and behavior from Google Maps in terms of Appearance. This can all be accomplished through Google Maps API, but rather than build these custom maps over and over again this is an attempt at packaging that functionality into a couple of classes which provide an easy interface for custom styles for the map, custom Marker images including hover and selected states, dynamic html content in Markers, custom infoboxes for each marker. All of the map and marker data, styles and content are loaded from json object to generate the custom map.

[View Project](http://robincwillis.github.io/CustomMapper) or
Fork it on [Github](https://github.com/robincwillis/CustomMapper)