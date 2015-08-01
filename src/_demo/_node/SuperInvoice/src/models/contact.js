var app = app || {models : {}, collections : {}, views : {}};


app.models.Contact = Backbone.RelationalModel.extend({

	urlRoot : '/api/contacts/',

	default: {
		companyName : '',
		firstName : '',
		lastName : '',
		address : '',
		city: '',
		state : '',
		zip : '',
		country : '',
		phone : '',
		email : '',
	},
	toJSON: function() {
	  var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
	  json.cid = this.cid;
	  return json;
	},
	parse: function( response ) {
	    response.id = response._id;
	    return response;
	}

});