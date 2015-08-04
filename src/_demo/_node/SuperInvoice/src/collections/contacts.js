var app = app || {models : {}, collections : {}, views : {}};

app.collections.Contacts = Backbone.Collection.extend({
	model: app.models.Contact,
	url: '/api/contacts'

});