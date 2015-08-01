---
layout: post
title: "Javascript Partials"
tags: javascript, partials
published: true
description: A trick to passing callbacks with arguments in javascript
---

Have you ever run into the problem where you want to pass a reference to a function as an argument in another function, but you also want to add arguments to the reference that you are passing? This happens to me from time and Javascript partials can provide a nice little pattern for working around this problem.

<!--more-->

~~~javascript
function doYou(){
	//finally do me
}
function doMe(doThis){
	//do me first then
	doThis()
}
doMe(doYou);
~~~

This is all fine and well, we pass a reference of ```doYou``` as an argument by ommitting the parenthesis. That way we have access to ```doYou()`` but wont actually invoke it until we want to. But what if we need to pass an argument to ```doYou```

~~~javascript
function doYou (arg) {
	//finally do me
	//wait what? I got called immediately?
}
function doMe(doThis){
	//do me first then
	doThis()
}
doMe(doYou(200));
~~~

This will not work, because in order to give ```doYou``` an argument we had to use the syntax to invoke the function doYou when it itself is an argument for ```doMe```, causing it to run as soon as doMe is called. One way to solve this is to just wrap ```doYou``` in an anonymous function

~~~javascript
function doYou (arg) {
	//finally do me
}
function doMe (doThis) {
	//do me first then
	doThis()
}
doMe(function () {
	doYou('something');
});
~~~

But this isn't not the prettiest solution in the world. Its not the ugliest either, but a possibly more elegant solution is to create what is called a partial.

~~~javascript
function doYou (arg) {
	//finally do me
};
function doMe (doThis) {
	//do me first then
	//doThis(/* you can add more arguments */);
	doThis()
	//invokes pDoYou with the previously
	//added arguments (in this case, 200);
}
var partial = function (func /*, 0..n args */) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var allArguments = args.concat(Array.prototype.slice.call(arguments));
        return func.apply(this, allArguments);
    };
};
var pDoYou = partial(doYou, 200);
doMe(pDoYou);
~~~

Just to explain what is happening here if it isn't clear. Now we create ```partial``` which is a function that accepts another function as its first argument and then any number of arguments we want to pass to that function. We can then pass a reference to this partial as a callback to another function without invoking it.