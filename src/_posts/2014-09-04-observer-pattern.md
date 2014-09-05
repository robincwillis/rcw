---
layout: post
title: "The Observer Pattern"
tags: javascript design pattern observer publish subscribe
published: true
description: asdf
---

I recently worked on a project that was well suited for the <a href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript" target="_blank">Observer</a> design pattern in JavaScript. Similar to the <a href="http://davidwalsh.name/pubsub-javascript" target="_blank">Publish/Subscribe</a> pattern, the basic concept behind this pattern is a single object that broadcasts notifications to a collection of other objects which <i>observe</i> it. This allows objects to communicate across easily while clarifying the relationships between them, especially given the event driven nature of JavaScript applications.

Of course, there are a lot of great <a href="https://github.com/Wolfy87/EventEmitter" target="_blank">frameworks</a> and <a href="https://carldanley.com/js-observer-pattern/" target="_blank">resources</a> for this pattern, but I couldn't find a drop dead simple example without any dependencies to get started with, so I decided to write one.

~~~~javascript
var Subject = function(){
	//Just for the example, not important
	this.now = new Date();
	//List of references to observer objects
	this.subscribers = [];
}
~~~~

<!--more-->

So this is the Subject or <i>broadcasting</i> Object. At a minimum it just needs an array of <i>observing</i> or <i>subscribing</i> objects.

~~~~javascript
Subject.prototype.addSubscriber = function subscribeObject(obj, callback){
	//Add a subscriber to this list
	//In this example for each subscriber we store a reference to the object itself
	//and a callback function
	this.subscribers.push( {"obj":obj,"callback":callback} );
};

Subject.prototype.removeSubscriber = function subscribeObject(obj){
	//Loop through the array of subscribers
	for( var i = 0, len = this.subscribers.length; i < len; i++ ) {
		if( this.subscribers[i].obj === obj ) {
			//remove the object passed in the arguments
			this.subscribers.splice( i, 1 );
			return true;
		}
	}
	//erk, we didn't find anything...
	return false;
};

Subject.prototype.notify = function notifySubscribers() {
	//Allow any arguments to be passed into this function
	var args = Array.prototype.slice.call( arguments, 0 );
	for( var i = 0, len = this.subscribers.length; i < len; i++ ) {
		//for each subscriber execute its specified callback function and
		//pass along arguments from this function
		this.subscribers[i].callback.apply(this.subscribers[i].obj, args);
	}
};
~~~~

So this is our broadcasting object in its simplest form. It just has three functions, addSubscriber, removeSubscriber and notify. Of course this can be built on top of. Lets make some observers.

~~~~javascript
var Observer = function(name){
	//Some properties
	this.name = name;
	return this;
};

//Some functions, can be whatever you like
Observer.prototype.doMe = function doMe(message){
	console.log(this.name + ' is doing Me: ' + message);
};

Observer.prototype.doYou = function doYou(message){
	console.log(this.name + ' is doing You: ' + message);
};
~~~~

These can really be whatever you want. But just for this example, here is an object with a couple generic methods, nothing very exciting.

~~~~javascript

var subject = new Subject();
var observer1 = new Observer('observer1');
var observer2 = new Observer('observer2');

//adding observers to our subject
subject.addSubscriber(observer1, observer1.doMe);
subject.addSubscriber(observer2, observer2.doYou);
subject.notify(subject.now);
//>observer1 is doing Me: Fri Sep 05 2014 11:00:03 GMT-0400 (EDT)
//>observer2 is doing You: Fri Sep 05 2014 11:00:03 GMT-0400 (EDT)
~~~~

Calling notify then broadcasts our message to each of the subject's observers and executes the callback function we registered for each. We can also remove one of the observers and call notifiy again.

~~~~javascript
//removing 2nd observer
subject.removeSubscriber(observer2);
subject.notify("or pass whatever message we want");
//>observer1 is doing Me: or pass whatever message we want
~~~~

That's basically it. Get at me on <a href="https://twitter.com/robincwillis" target="_blank">twitter</a> if you have any questions.
