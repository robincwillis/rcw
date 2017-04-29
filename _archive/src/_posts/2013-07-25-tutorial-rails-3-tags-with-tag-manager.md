---
layout: post
title: "Rails 3 Tags With Tag Manager"
date: 2013-07-25 09:36:13
tags: tutorial rails bootstrap javascript
---

####Rails 3 + Bootstrap Typeahead + bootstrap-tagmanager + acts-as-taggable-on = Baller Tags
I was looking for a simple and easy tagging solution to work with Twitter Bootstrap’ Typeahead functionality. I haven’t seen any examples of this on the internet so I thought I would share my solution which both works great and is pretty simple to setup. So in less than 5 minutes we will create a tagging system that looks like this.

![Baller Tags]({{site.data.s3.blog}}baller-tags.png "Baller Tags")

<!--more-->

The gems used to accomplish this are

<a target="_blank" href="https://github.com/thomas-mcdonald/bootstrap-sass">bootstrap-sass</a>

<a target="_blank" href="https://github.com/mbleigh/acts-as-taggable-on">acts-as-taggable-on</a>

and Tag Manager, a really awesome jQuery plugin

<a target="_blank" href="https://github.com/max-favilli/tagmanager">tagmanager</a>

Ok lets get started, First lets create our application

~~~~~ruby
> rails new tag_example
~~~~~

Next lets add the gems we need to our Gemfile

~~~~~ruby
gem 'bootstrap-sass', '2.3.1.2'
gem 'acts-as-taggable-on'
~~~~~

and run

~~~~~ruby
>bundle install
~~~~~

Also download the Tag Manager plugin from <a target="_blank" href="https://github.com/max-favilli/tagmanager">https://github.com/max-favilli/tagmanager</a> put `bootstrap-tagmanager.js` in `tag_example/vendor/assets/javascripts` and `bootstrap-tagmanager.css` in `tag_example/vendor/assets/stylesheets` Last we need to add the javascripts for Bootstrap and Tag Manager to the asset pipeline. add these lines to `app/assets/javascripts/application.js`

~~~~~ruby
//= require bootstrap
//= require bootstrap-tagmanager
~~~~~

above the line

~~~~~ruby
//= require_tree .
~~~~~

and in `app/assets/stylesheets/application.css` add this line

~~~~~ruby
*= require bootstrap-tagmanager
~~~~~

above the line

~~~~~ruby
*= require_self
~~~~~

a few more things we need to do to setup our project remove the default `index.html` page

~~~~~ruby
> rm /tag_example/public/index.html
~~~~~

and direct the application to our products. in `routes.rb` add the line

~~~~~ruby
root :to => 'products#index'
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
> rm tag_example/app/assets/stylesheets/products.css.scss
> rm tag_example/app/assets/stylesheets/scaffolds.css.scss
~~~~~

and add tell our app to start using bootstrap

~~~~~ruby
> touch tag_example/app/assets/stylesheets/custom.css.scss
~~~~~

and add this line to `custom.css.scss`

~~~~~ruby
@import "bootstrap";
~~~~~

and start the server

~~~~~ruby
> rails s
~~~~~

Now we should have everything we need setup to implement our tagging system. First lets make our products taggable in `product.rb` add

~~~~~ruby
acts_as_taggable_on :tags
~~~~~

We also need to create an accessible attribute to get and set our tags for our product.

~~~~~ruby
attr_accessible :name, :tag_list
~~~~~

The `acts-as-taggable-on` gem takes care of all this stuff for us, so I am not really going to go into detail about it. If you want to learn about this gem there is a great railscast on it.

lets also require a name to be present

~~~~~ruby
validates :name, presence: true
~~~~~

Ok time to move onto the controller. Since we want people to get hints on existing tags using Bootstraps Typeahead, we need to offer our view a list of all the existing tags in the system. open `app/controllers/products_controller.rb` and in your new and edit actions add this variable.

~~~~~ruby
@autocomplete_items = ActsAsTaggableOn::Tag.all
~~~~~

Now its time for the magic, we are going to add the form and javascript that makes it all work. Open up `app/views/products/_form.html.erb`

We need to add a field to our form for users to add tags to products. In our form helper add the field.

~~~~~ruby
<%= f.label :tags %>
<%= f.hidden_field :tag_list, autocomplete: "off" %>
<%= text_field_tag 'tag_input', nil, class: "tm-input" %>
~~~~~

Now let me explain what this is doing because it’s not clear yet. First we are adding a hidden form which is bound to our :tag_list attribute and will store our tags for creation and editing. Then we have a user blank input field that will work with our Typeahead functions.

Next we need to create two javascript objects, one that holds all the tags that exist for our typeahead and another that holds the existing tags for that term to represent. After the form add

~~~~~javascript
<%= javascript_tag "var items = #{ @product.tag_list.to_json };" %>
<%= javascript_tag "var autocomplete_items = #{ @autocomplete_items.to_json };" %>
~~~~~

Lastly we will add our Javascript to enable Tag Manager on our form. There are many options on where to include this, but just to get it working quickly you can add this too the end of _form.erb.html

~~~~~javascript
$(".tm-input").tagsManager(
    {
      prefilled: items,
      typeahead: true,
      hiddenTagListName: 'tag_list',
      hiddenTagListId: 'product_tag_list',
      typeaheadSource: function(){
        var tags = [];
         $(autocomplete_items).each(function(i,tag){
          tags.push(tag.name);
         });
         return tags;
      }
    });
~~~~~

So what we are doing is attaching the Tag Manager plugin to our text field, setting its pre-filled items to the existing tags for a particular product. We set typeahead to true to enable bootstraps typeahead functionality. We set our hidden field to store the tags set by the plugin. Lastly we set the source to a a function which takes our tags from json key value pairs and dumps them into an array which is the format typeahead expects. T

hats it, were done!

If you have any questions feel free to message me on Twitter <a target="_blank" href="https://twitter.com/robincwillis">@robincwillis</a>

note: In a real application you will want to take things further like preventing duplicates from being created or fetched etc.