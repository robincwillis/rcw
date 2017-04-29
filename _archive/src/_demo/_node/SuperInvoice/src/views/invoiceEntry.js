var app = app || {models : {}, collections : {}, views : {}};

app.views.InvoiceEntry = Backbone.View.extend({
	tagName: 'tr',
	template: invoice.Templates["invoice_entry"],

	events : {
		'click #show-invoice' : 'showInvoice',
		'click #delete-invoice' : 'deleteInvoice',
	},

	initialize : function(){

	},
	render : function(){
		this.model.fetchRelated();
		console.log(this.model.getRelation('employee'));
		console.log(this.model.getRelation('client'));

		// console.log(this.model.get('employee'));
		// console.log(this.model.get('client'));


		console.log(this.model);

		var json = {
			invoice : this.model.toJSON(),
			//client : this.model.get('client').toJSON(),
			//employee : this.model.get('employee').toJSON()
		};



		this.$el.html(this.template(json));
		return this;
	},
	showInvoice : function( e ){
		e.preventDefault();
		this.trigger('show:invoice',this.model);

	},

	deleteInvoice : function( e ){
		e.preventDefault();
		this.trigger('delete:invoice', this.model);
	}
});