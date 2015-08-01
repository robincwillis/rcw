var app = app || {models : {}, collections : {}, views : {}};

app.views.Contact = Backbone.View.extend({
	tagName: 'tr',
	template: invoice.Templates["contact_entry"],

	events : {
		'click #edit-contact' : 'editContact',
		'click #save-contact' : 'saveContact',
		'click #delete-contact' : 'deleteContact'
	},

	initialize : function(){
		this.model.on('change', this.render, this);
	},
	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	editContact : function( e ){
		e.preventDefault();

		var template = invoice.Templates["contact_edit"];

		this.$el.find('#edit-contact-container').html(template(this.model.toJSON()));

	},

	saveContact : function( e ){
		e.preventDefault();
		var formData = {};

		$('#edit-contact-form').find('input').each(function(i, el){
			if( $(el).val !== ''){

				formData[el.id] = $(el).val();
			}
			//$(el).val('');
		});


		this.model.set( formData );
		this.model.save();
	},


	deleteContact : function( e ){
		e.preventDefault();
		this.trigger('delete:contact',this.model);
	}
});