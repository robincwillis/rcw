var app = app || {models : {}, collections : {}, views : {}};

app.models.Invoice = Backbone.RelationalModel.extend({

	//urlRoot : '/api/invoices/',

	relations:[
		{
			type: 'HasOne',
			key: 'employee',
			relatedModel: 'app.models.Contact',
			autoFetch: true,
			// reverseRelation: {
			// 	key: 'from',
			// 	includeInJSON: 'id'
			// }
		},
		{
			type: 'HasOne',
			key: 'client',
			relatedModel: 'app.models.Contact',
			autoFetch: true,
			// reverseRelation: {
			// 	key: 'to',
			// 	includeInJSON: 'id'
			// }
		},
		// {
		// 	type: 'HasMany',
		// 	key: 'services',
		// 	relatedModel: 'app.models.Service',
		// }
	],

	default: {
		title : 'Untitled',
		date : '',
		dueDate : '',
		status : '',
		pref: '',
		total : 0,
		subtotal : 0,
		taxes : 0
	},
	initialize : function(){

		_.bindAll(this, 'updateTotal');

		//this.client = new app.models.Contact();
		//this.employee = new app.models.Contact();
		//this.services = new app.collections.Services();

	},

	updateTotal : function(){
		this.attributes.total = 0;
		var charges = _.pluck(this.services.toJSON(),"cost");
		this.attributes.total += _.reduce( charges , function(memo, num){ return memo + num; }, 0);
		this.trigger("update:total");
	},

	parse: function( response ) {

	    // console.log(response);
     //    response.client = new app.models.Contact({id :response.client});
     //    response.employee = new app.models.Contact({id :response.employee});

     //    response.client.fetch();
     //    response.employee.fetch();

     //    console.log(this.client);

	    response.id = response._id;
	    return response;
	}

});