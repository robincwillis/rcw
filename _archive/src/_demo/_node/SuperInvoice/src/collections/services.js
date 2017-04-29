var app = app || {models : {}, collections : {}, views : {}};


app.collections.Services = Backbone.Collection.extend({
	model: app.models.Service,
	url: '/api/services'

});