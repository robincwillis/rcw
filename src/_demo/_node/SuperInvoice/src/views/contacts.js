var app = app || {models : {}, collections : {}, views : {}};


app.views.Contacts = Backbone.View.extend({

	el: '#contacts',

	template : invoice.Templates["contact_list"],

	events:{
		'click #new-contact' : 'newContact',
		//'click #save-contact' : 'saveContact',
		'click #add-contact' : 'addContact',
	},

	initialize: function(){

		this.collection.on('add', this.render, this);
 		this.collection.on('remove', this.render, this);
 		this.collection.on('reset', this.render, this);
 		this.collection.fetch({reset:true});
//		this.render();
	},

	render: function(){

		this.$el.html(this.template());

		this.collection.each(function(contact){
			this.renderContact(contact);
		}, this);

		return this;
	},

	renderContact: function( contact ){
		var contact = new app.views.Contact({
			model : contact
		});

		//contact.listenTo(this, 'save:contact', contact.saveContact);

		this.listenTo(contact, 'delete:contact', this.deleteContact);
		this.$el.find('tbody').append( contact.render().el );

	},

	newContact : function( e ){
		e.preventDefault();

		console.log("new contact");

		var template = invoice.Templates["contact_new"];

		this.$el.find('#new-contact-container').html(template);

	},

	addContact : function( e ){
		e.preventDefault();

		var formData = {};

		$('#add-contact-form').find('input').each(function(i, el){
			if( $(el).val !== ''){

				formData[el.id] = $(el).val();
			}

		});

		console.log(formData);
		var contact = new app.models.Contact(formData);

			//Clear Inputs
		this.collection.create( contact );
		//$(el).val('');
	},

	saveContact : function( e ){
		//this.trigger('save:contact');
	},

	deleteContact : function( contact ){
		this.collection.remove(contact);
	}

});
