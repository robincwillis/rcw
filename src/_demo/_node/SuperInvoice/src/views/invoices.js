var app = app || {models : {}, collections : {}, views : {}};


app.views.Invoices = Backbone.View.extend({

	el: '#invoices',

	template : invoice.Templates["invoice_list"],

	events:{
		'click #new-invoice' : 'newInvoice',
		'click #add-invoice' : 'addInvoice',
	},

	initialize: function(options){
		this.parent = options.parent;
		console.log('init');
		this.collection.on('add', this.render, this);
 		this.collection.on('remove', this.render, this);
		this.collection.on('reset', this.render, this);
 		this.collection.fetch({reset:true});
	},

	render: function(){



		this.$el.html(this.template());
		this.collection.each(function( item ){
			this.renderInvoice( item );
		}, this);

		return this;
	},

	renderInvoice: function( invoice ){
		var invoiceEntry = new app.views.InvoiceEntry({
			model: invoice
		});

		console.log('rendering invoice');
		this.listenTo(invoiceEntry, 'show:invoice', this.showInvoice);
		this.listenTo(invoiceEntry, 'delete:invoice', this.deleteInvoice);
		this.$el.find('tbody').append( invoiceEntry.render().el );
	},

	showInvoice : function( invoice ){


		var invoiceView = new app.views.Invoice({
			model: invoice,
			parent: this.parent
		});

		this.listenTo(invoiceView, 'show:invoices', this.showList);

		this.$el.find('#show-invoice-container').html(invoiceView.render().el );

		this.hideList();
	},

	hideList : function(){
		this.$el.find('#list-invoice-container').hide();
	},

	showList : function(){
		this.$el.find('#list-invoice-container').show();
		this.render();
	},

	newInvoice : function( e ){
		e.preventDefault();
		var template = invoice.Templates["invoice_new"];
		this.$el.find('#new-invoice-container').html(template({contacts:this.parent.contacts.toJSON()}));
		$('.datepicker').datepicker();
	},

	addInvoice : function( e ){
		e.preventDefault();
		console.log('add invoice');
		var formData = {};

		$('#add-invoice-form').find('input').each(function(i, el){
			if( $(el).val !== ''){

				formData[el.id] = $(el).val();
			}
			$(el).val('');
		});

		formData["status"] = "pending";

		console.log(formData);
		var employeeId = $('#employeeId').find(":selected").val();
		var clientId = $('#clientId').find(":selected").val();

		var invoice = new app.models.Invoice(formData);
		var employeeS = this.parent.contacts.get(employeeId);
		var clientS = this.parent.contacts.get(clientId);


		console.log(employeeS.attributes._id);
		console.log(clientS.attributes._id);

		invoice.set({
			employee:employeeS.attributes._id,
			client: clientS.attributes._id
		});

		// employee.set({
		// 	'from': invoice
		// });

		// client.set({
		// 	'to': invoice
		// });



		var i = this.collection.create( invoice );

				//console.log(i);


	},

	deleteInvoice : function( invoice ){
		invoice.destroy();
		this.collection.remove(invoice);
	}

});
