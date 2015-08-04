var app = app || {models : {}, collections : {}, views : {}};


app.collections.Invoices = Backbone.Collection.extend({
	model: app.models.Invoice,
	url: '/api/invoices'

});