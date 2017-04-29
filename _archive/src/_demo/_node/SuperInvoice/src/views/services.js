var app = app || {models : {}, collections : {}, views : {}};


app.views.Services = Backbone.View.extend({

	template : invoice.Templates["service_list"],

	initialize: function(options){
		this.parent = options.parent;

		this.collection.on('add', this.render, this);
 		this.collection.on('remove', this.render, this);
		this.render();
	},

	render: function(){
		this.$el.html(this.template());
		this.collection.each(function( item ){
			this.renderService( item );
		}, this);

		return this;
	},
	renderService : function( service ){
		var serviceView = new app.views.Service({
			model: service
		});

		this.listenTo(serviceView, 'delete:service', this.deleteService);

		this.$el.find('tbody').append( serviceView.render().el );
	},

	deleteService : function( service ){
		this.collection.remove(service);
	}
});