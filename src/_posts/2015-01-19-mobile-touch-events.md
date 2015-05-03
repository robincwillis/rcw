---
layout: post
title: "Mobile Touch Events"
tags: javascript events mobile touch
published: true
description: Know how your mobile touch events work
---

Mobile touch events don't work exactly how you would expect in Javascript, and in order to provide the best user experience it is worth knowing how they work and in certain cases overriding that behavior. Here is a codepen that logs the time and order of mobile and click events on an element and displays them back.


<p data-height="420" data-theme-id="13162" data-slug-hash="raQVKW" data-default-tab="result" data-user="robincwillis" class='codepen'>See the Pen <a href='http://codepen.io/robincwillis/pen/raQVKW/'>raQVKW</a> by Robin Willis (<a href='http://codepen.io/robincwillis'>@robincwillis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

if you are viewing this on a laptop and click the box you will just see a mousedown, mouseup and click events triggered. If you are on a touch device you will see these in addition to click events. You will also notice that they are delayed by 300ms or so.

<!--more-->

1. touchstart
2. touchend
3. Wait 300ms in case of another tap
4. click

I have noticed a lot of mobile sites have clunky interaction because they don't handle this delay properly. [FastClick](https://github.com/ftlabs/fastclick) seems to be the most popular solution for this. I am not the biggest fan of this library because what if your app wants to support double click, or swipe or other gesture on certain elements but not others? I think the right approach is to detect if someone is on mobile and in that case override your touch events on elements and remove that delay where you know you want a touch to function like a click.

jQuery mobile has a pretty cool [API](http://demos.jquerymobile.com/1.2.0/docs/api/events.html) for this. The most useful events they provide are ```vmouseover, vmousedown, vmousemove, vmouseup, vclick, vmouseout, vmousecancel```. But I don't want to include all of jquery mobile in all of my projects, so I just grab the one Javascript file from the source which handles this functionality. You can grab it [here](https://github.com/jquery/jquery-mobile/blob/master/js/events/touch.js), include it and then in your project do something like

~~~javascript
$("a, button").on('tap', function (e) {
 $(this).trigger('click');
 e.preventDefault();
});
~~~

Now all of your links and buttons will work without the 300ms delay yet other elements which you want to use other gestures for will remain unaffected.
