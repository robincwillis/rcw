var app = app || {models : {}, collections : {}, views : {}};


app.views.Service = Backbone.View.extend({
	tagName: 'tr',
	template: invoice.Templates["service_entry"],

	events : {
		'click #edit-service' : 'editService',
		'click #save-service' : 'saveService',
		'click #delete-service' : 'deleteService',
		'click #cancel-edit-service' : 'cancelEdit'
	},


	initialize : function(){
		this.model.on('change', this.render, this);
		this.model.on('update:cost', this.render, this);
	},

	render : function(){
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	editService : function( e ){
		e.preventDefault();
		var editTemplate = invoice.Templates["service_edit"];
		this.$el.html(editTemplate(this.model.toJSON()));

	},

	saveService : function( e ){
		e.preventDefault();
		console.log('save service');
		var formData = {};

		$('#edit-service-form').find('input').each(function(i, el){
			if( $(el).val !== ''){

				formData[el.id] = $(el).val();

			}

			//$(el).val('');


		});

		this.model.set( formData );
		this.model.updateCost();
	},
	deleteService : function( e ){
		e.preventDefault();
		this.trigger('delete:service', this.model);
	},

	cancelEdit : function( e ){
		e.preventDefault();
		this.render();
	}

});