var app = app || {models : {}, collections : {}, views : {}};


app.views.AppView = Backbone.View.extend({
	initialize : function(){

	this.invoices = new app.collections.Invoices();
	this.contacts = new app.collections.Contacts();
	//this.contacts.fetch();
	this.invoiceView = new app.views.Invoices({parent: this, collection: this.invoices});
	this.contactView = new app.views.Contacts({collection:this.contacts});

	}

});

$(function(){

	var Invoices = new app.views.AppView();

});
