

Often times one will want to load in some fresh content without loading a new page. You know by now ajax is the way to do this. Say we are not using something super fresh like Angular or Ember, you also know jQuery makes this really easy. However appending or replacing content on in the dom can be pretty disrupting for your page layout and overall experience. Things can jump, scrollbars can appear etc. So you want to animate these changes to the layout to provide a smooth transition. You also know CSS3 is the way to go ot add these transitions so you might do something like this.

add a class and remove a class


wait that doesn't work.

arg ok lets just add the css properties manually.


damn still doesn't work.


I have to be honest, I am not sure why or how the above things do not work but they don't. The solution is setTimeout. add a setTimeout function with like 1ms and whoola there you go.


If anyone has more information on this hit me up on twitter @robincwillis . I am curious.

