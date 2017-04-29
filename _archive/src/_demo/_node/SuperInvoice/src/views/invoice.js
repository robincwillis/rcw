var app = app || {models : {}, collections : {}, views : {}};

app.views.Invoice = Backbone.View.extend({

	template : invoice.Templates['invoice_show'],

	events : {
		'click #edit-invoice' : 'editInvoice',
		'click #save-invoice' : 'saveInvoice',
		'click #cancel-invoice' : 'cancelInvoice',
		'click #close-invoice' : 'closeInvoice',
		'click #new-service' : 'newService',
		'click #add-service' : 'addService'
	},

	initialize : function(options){
		this.parent = options.parent;

		this.model.on('change', this.render, this);
		this.model.on('update:total', this.render, this);
		//this.model.on('change', this.model.updateTotal, this.model);
 		//this.model.on('reset', this.render, this);
	},

	renderTotal : function(){
		console.log("this is rending total");
	},

	render : function(){

		console.log('rendering');

		//console.log(JSON.stringify(this.model.client.toJSON()));

		var json = {
			invoice : this.model.toJSON(),
			client : this.model.client.toJSON(),
			employee : this.model.employee.toJSON()
		};

		this.$el.html(this.template(json));

		this.renderServices();

		return this;
	},
	editInvoice : function( e ){
		e.preventDefault();

		this.$el.find('#invoice-info').hide();

		var template = invoice.Templates["invoice_edit"];

		var json = {
			invoice : this.model.toJSON(),
			client : this.model.client.toJSON(),
			employee : this.model.employee.toJSON(),
			contacts : this.parent.contacts.toJSON()
		};


		this.$el.find('#edit-invoice-container').html(template(json));
		this.$el.find('.datepicker').datepicker();

	},

	saveInvoice : function( e ){
		e.preventDefault();


		var formData = {};



		$('#edit-invoice-form').find('input').each(function(i, el){
			if( $(el).val !== ''){

				formData[el.id] = $(el).val();
			}
			//$(el).val('');
		});

		formData["status"] = $("#status").find(":selected").text();


		var employeeId = $('#employeeId').find(":selected").val();
		var clientId = $('#clientId').find(":selected").val();

		console.log(clientId);

		this.model.employee = this.parent.contacts.get(employeeId);
		this.model.client = this.parent.contacts.get(clientId);
		this.model.set(formData);
		this.model.save();

		console.log(this.model);


		this.$el.find('#edit-invoice-container').empty();
		this.$el.find('#invoice-info').show();
	},

	cancelInvoice : function( e ){
		this.$el.find('#edit-invoice-container').empty();
		this.$el.find('#invoice-info').show();
	},
	closeInvoice : function( e ){
		console.log('closing invoice');
		this.trigger('show:invoices');
		this.remove();
	},

	renderServices : function(){
		var services = new app.views.Services({
			collection : this.model.services
		});

		this.$el.find('#list-service-container').html(services.render().el);
	},

	newService : function( e ){
		console.log('new service');
		e.preventDefault();
		var template = invoice.Templates["service_new"];
		this.$el.find('#new-service-container').html(template);

	},

	addService : function( e ){
		e.preventDefault();
		console.log('add service');
		var formData = {};

		$('#add-service-form').find('input').each(function(i, el){
			if( $(el).val !== ''){

				formData[el.id] = $(el).val();
			}

			//$(el).val('');


		});

		var service = new app.models.Service(formData);

		console.log(formData);

		this.model.services.add( service );

		this.model.listenTo(service, 'update:cost', this.model.updateTotal);
		service.updateCost();



		this.$el.find('#new-service-container').empty();

	}

});