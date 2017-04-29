---
layout: post
title: "Google Maps Trace"
tags: google maps javascript
published: true
description : I recently started a new project aimed at making it easier to align image overlays onto Google Maps.
---

![Google Maps Trace]({{site.data.s3.blog}}google-maps-trace.jpg)

I recently started a new project aimed at making it easier to align image overlays onto Google Maps.

Google Maps Trace makes it easy to align custom image overlay geometry with an underlying Google Map and retrieve the bounds for that overlay. I had a couple of projects that wanted to use the navigation and geographical features of Google Maps but with total custom geometry and styles for features such as land, roads, buildings etc. Luckily this is easily accomplished using image overlays with svg/png fallback. Unfortonuly there aren't any simple tools out there to align the overlay's geometry with Google Map's. That's where this comes in.


[View Project](http://robincwillis.github.io/GoogleMapsTrace) or
Fork it on [Github](https://github.com/robincwillis/GoogleMapsTrace)