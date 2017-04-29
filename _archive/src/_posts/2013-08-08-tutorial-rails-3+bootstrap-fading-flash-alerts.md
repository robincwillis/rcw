---
layout: post
title: "Rails 3 & Bootstrap Fading Flash Alerts"
date: 2013-08-08
tags: tutorial rails bootstrap
---
I wanted to publish a tutorial on how to easily make temporary flash alerts that fade away using Rails 3 flash notices and Bootstrap’s alert class. This technique has some nifty features like passing a key to boostraps alert class, so that a flash indicating success is green, warning is yellow and error is red etc. and be reusable in all your controllers.

![Fading Flash Alerts]({{site.data.s3.blog}}fading-flash.jpg "Fading Flash Alerts")


<!--more-->


Sweet, lets do it. First lets create our application

~~~~~ruby
> rails new alert_example
~~~~~

Next lets add the boostrap gem to our Gemfile, in our GemFile add.

~~~~~ruby
gem 'bootstrap-sass', '2.3.1.2'
~~~~~

and run

~~~~~ruby
> bundle install
~~~~~

Add Bootstrap javascript to the asset pipeline. by adding this line to `alert_example/app/assets/javascripts/application.js`

~~~~~ruby
//= require bootstrap
~~~~~

above the line

~~~~~ruby
//= require_tree .
~~~~~

a few more things we need to do to setup our project remove the default `index.html` page.

~~~~~ruby
> rm /tag_example/public/index.html
~~~~~

Next lets create a model to apply our tagging system to

~~~~~ruby
> rails g scaffold product name:string
~~~~~

And generate a migration for the `acts_as_taggable_on`

~~~~~ruby
> rails g acts_as_taggable_on:migration
~~~~~

migrate the database

~~~~~ruby
> rake db:migrate
~~~~~

The scaffold command makes some css files that we don’t need because we are using Bootstrap, so lets remove it.

~~~~~ruby
> rm alert_example/app/assets/stylesheets/products.css.scss
> rm alert_example/app/assets/stylesheets/scaffolds.css.scss
~~~~~

and direct the application to our products. in `routes.rb` add the line

~~~~~ruby
root :to => 'products#index'
~~~~~

now lets fire up the server

~~~~~ruby
> rails s
~~~~~

and add tell our app to start using bootstrap and our own custom styles.

~~~~~ruby
> touch alert_example/app/assets/stylesheets/custom.css.scss
~~~~~

and add this line to custom.css.scss

~~~~~css
@import "bootstrap";
~~~~~

and while were here lets define our custom styles for the alerts it can be really annoying how alerts appear and push the rest of your content down and then the content jumps back up after it fades away and is removed, so we will make an absolutely positioned container for our alerts to make sure it doesn’t interfere with the rest of our content.

~~~~~css
#notice{
  left:0;
  top:20px;
  position:absolute;
  z-index:10000;
  width:100%;
}
~~~~~

and also lets add a style for our alert to make sure it doesn’t stretch across the whole page

~~~~~css
.alert-temp{
  margin-left:20px;
  margin-right:20px;
}
~~~~~

next lets add some tags that for each flash notice that gets created we generate a boostrap alert for it and pass it the notices value (its message) and a custom key to define which bootstrap alert class to use. in app/views/layouts/application.html.erb

~~~~~javascript
<div id="notice">
  <% flash.each do |key, value| %>
       <div class="alert-temp alert fade in alert-<%= key %>"><%= value %></div>
  <% end %>
</div>
~~~~~

notice we are using the classes ‘fade’ and ‘in’ these are packaged with boostrap to handle fading elements in and out. it will start out visible with both classes.

We can do the same thing for error messages in our forms if we like. in `alert_example/app/views/products/_form.html.erb`

~~~~~javascript
<% if @product.errors.any? %>
<div id="notice">
  <div class="alert alert-temp fade in alert-error">
  	<%= pluralize(@product.errors.count, "error") %>
  	prohibited this product from being saved:
  </div>
    </div>
 <ul class="unstyled">
      <% @product.errors.full_messages.each do |msg| %>
        <li class="alert alert-error"><%= msg %></li>
      <% end %>
  </ul>

<% end %>
~~~~~

now lets make a little javascript to handle our fading. create the `temp-alert.js` file

~~~~~ruby
> touch alert_example/app/assets/javascripts/temp-alert.js
~~~~~

open it and in `temp-alert.js` add this code.

~~~~~javascript
$(document).ready(function(){

  function fadeAlert(){
    $('.alert-temp').removeClass('in');
  }

  function removeAlert(){
    $('.alert-temp').remove();
  }

  window.setTimeout(fadeAlert,1000);
  window.setTimeout(removeAlert,3000);

});
~~~~~

So we have two functions, the first will fade the alert by removing the in class, and the second will actually remove the element from the page once it is done fading. They are called on set timeout so you can tweak how long you want the alert to be visible before fading it out. now lets rig our controller to send some awesome flash notices. In `alert_example/app/controllers/application_controller.rb` For example for our create method we can do

~~~~~ruby
if @product.save
  format.html {
    flash[:success] = "#{@product.name} was successfully created."
    redirect_to @product
  }
else
  format.html {
    render action: "new"
  }
end
~~~~~

Note, we don’t need to add the flash on error here because we already did it in our form. Thats it, enjoy!