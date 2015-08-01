
//Module dependancies
var application_root = __dirname,
express = require('express'), //Web Framework
path = require('path'), //Utilities for dealing with file paths
mongoose = require('mongoose'); //MongoDB integration

//Create server
var app = express();

//Server Config
app.configure( function(){
	//parses request body and populates request body
	app.use(express.bodyParser());
	//checks request body for HTTP method overrides
	app.use(express.methodOverride());
	//perform route loockup based on url and http method
	app.use(app.router);
	//where to serve static content
	app.use(express.static(application_root));
	//show all errors in development
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

var port = 4711;
app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

//Routes
app.get('/api', function( request, response){
	response.send('Invoice API is running');
});

app.get('/api/invoices', function(request, response){
	return InvoiceModel.find(function(err, invoices){
		if(!err){
			return response.send(invoices);
		}else{
			return console.log(err);
		}
	});
});

app.get ('/api/invoices/:id', function( request, response){
	return InvoiceModel.findById( request.params.id, function( err, invoice){
		if(!err){
			return response.send(invoice);
		}else{
			return console.log(err);
		}
	});
});

app.post('/api/invoices', function(request, response){
	var invoice = new InvoiceModel({

		title : request.body.title,
		date : request.body.date,
		dueDate : request.body.dueDate,
		pref : request.body.pref,
		status : request.body.status,
		total  : request.body.total,
		subtotal  : request.body.subtotal,
		taxes  : request.body.taxes,
		services : request.body.services,
		employee  : request.body.employee._id,
		client  : request.body.client._id

	});
	invoice.save(function(err){
		if(!err){
			return console.log('Invoice created');
		}else{
			return console.log(err);
		}

	});
	return response.send(invoice);
});

app.put('/api/invoices/:id', function(request, response){
	console.log('Updating invoice '+ request.body.title);
	return InvoiceModel.findById( request.params.id, function(err, invoice){

		invoice.title = request.body.title;
		invoice.date = request.body.date;
		invoice.dueDate = request.body.dueDate;
		invoice.pref = request.body.pref;
		invoice.status = request.body.status;
		invoice.total  = request.body.total;
		invoice.subtotal  = request.body.subtotal;
		invoice.taxes  = request.body.taxes;
		invoice.services = request.body.services;
		invoice.employee  = request.body.employee;
		invoice.client  = request.body.client;

		return invoice.save(function(err){
			if(!err){
				console.log('Invoice updated');
			}else{
				console.log(err);
			}
		});
	});
});

app.delete('/api/invoices/:id', function( request, response){
	console.log('Deleting invoice with id: '+request.params.id);
	return InvoiceModel.findById(request.params.id, function(err,invoice){
		return invoice.remove(function(err){
			if(!err){
				console.log('Invoice removed');
				return response.send('');
			}else{
				console.log(err);
			}
		});
	});
});

//Routes Contacts

app.get('/api/contacts', function(request, response){
	return ContactModel.find(function(err, contacts){
		if(!err){
			return response.send(contacts);
		}else{
			return console.log(err);
		}
	});
});

app.get('/api/contacts/:id', function(request, response){
	return ContactModel.findById( request.params.id, function( err, contact){
		if(!err){
			return response.send(contact);
		}else{
			return console.log(err);
		}
	});
});

app.post('/api/contacts', function(request, response){
	var contact = new ContactModel({

		companyName: request.body.companyName,
		firstName : request.body.firstName,
		lastName : request.body.lastName,
		address : request.body.address,
		city: request.body.city,
		state : request.body.state,
		zip : request.body.zip,
		country : request.body.country,
		phone : request.body.phone,
		email : request.body.email

	});
	contact.save(function(err){
		if(!err){
			return console.log('Contact created');
		}else{
			return console.log(err);
		}

	});
	return response.send(contact);
});

app.put('/api/contacts/:id', function(request, response){
	console.log('Updating contact '+ request.body.title);
	return ContactModel.findById( request.params.id, function(err, contact){

		contact.companyName= request.body.companyName;
		contact.firstName = request.body.firstName;
		contact.lastName = request.body.lastName;
		contact.address = request.body.address;
		contact.city= request.body.city;
		contact.state = request.body.state;
		contact.zip = request.body.zip;
		contact.country = request.body.country;
		contact.phone = request.body.phone;
		contact.email = request.body.email;

		return contact.save(function(err){
			if(!err){
				console.log('Contact updated');
			}else{
				console.log(err);
			}
		});
	});
});

app.delete('/api/contacts/:id', function(request, response){

});

//Routes Services

// app.get('/api/invoices/:id/services/', function(request, response){

// });

// app.get('/api/invoices/:id/services/:id', function(request, response){

// });

// app.post('/api/invoices/:id/services/:id', function(request, response){

// });

// app.put('/api/invoices/:id/services/:id', function(request, response){

// });

// app.delete('/api/invoices/:id/services/:id', function(request, response){

// });


//Connect to the database
mongoose.connect( 'mongodb://localhost/invoice_database');

//Schemas
var Contact = new mongoose.Schema({
	companyName: String,
	firstName : String,
	lastName : String,
	address : String,
	city: String,
	state : String,
	zip : String,
	country : String,
	phone : String,
	email : String
});

var Service = new mongoose.Schema({
	description: String,
	rate : Number,
	time : Number,
	cost : Number
});

var Invoice = new mongoose.Schema({
	title: String,
	date: Date,
	dueDate: Date,
	pref: String,
	status : String,
	total : Number,
	subtotal : Number,
	taxes : Number,
	services: [Service],
	employee : {type: mongoose.Schema.Types.ObjectId, ref: 'Contact'},
	client : {type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}
});

//Models
var InvoiceModel = mongoose.model('Invoice', Invoice);
var ContactModel = mongoose.model('Contact',Contact);
var ServiceModel = mongoose.model('Service',Service);

