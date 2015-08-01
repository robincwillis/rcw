var app = app || {models : {}, collections : {}, views : {}};

app.models.Service = Backbone.RelationalModel.extend({

	//urlRoot : '/api/services',

	initialize: function(){
		_.bindAll(this, 'updateCost');
		this.updateCost();
	},

	default: {
		description : '',
		rate : 0,
		time : 0,
		cost : 0
	},

	updateCost : function() {
		console.log("updating cost");
		this.attributes.cost = this.attributes.rate * this.attributes.time;
		this.trigger('update:cost');
	}

});