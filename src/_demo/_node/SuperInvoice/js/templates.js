this["invoice"] = this["invoice"] || {};
this["invoice"]["Templates"] = this["invoice"]["Templates"] || {};

this["invoice"]["Templates"]["contact_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"edit-contact-modal\" class=\"modal hide fade\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h3>Edit Contact</h3>\n    </div>\n\n    <div class=\"controls\">\n        <div class=\"modal-body\">\n            <form id=\"edit-contact-form\">\n            <div class=\"controls controls-row\">\n                <div class=\"span12\">\n                <label for=\"companyName\">Company: </label>\n                <input class=\"input-block-level\" id=\"companyName\" type=\"text\" value=\"";
  if (stack1 = helpers.companyName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.companyName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                </div>\n            </div>\n            <div class=\"controls controls-row\">\n                <div class=\"span6\">\n                <label  for=\"date\">First Name: </label>\n                <input class=\"input-block-level\" id=\"date\" type=\"text\" value=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                </div>\n                <div class=\"span6\">\n                <label for=\"lastName\">Last Name: </label>\n                <input class=\"input-block-level\" id=\"lastName\" type=\"text\" value=\"";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                </div>\n            </div>\n            <div class=\"controls controls-row\">\n                <div class=\"span12\">\n                <label for=\"address\">Address: </label>\n                <input class=\"input-block-level\" id=\"address\" type=\"text\" value=\"";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                </div>\n            </div>\n            <div class=\"controls controls-row\">\n                    <div class=\"span3\">\n                    <label for=\"city\">City: </label>\n\n                    <input class=\"input-block-level\" id=\"city\" type=\"text\" value=\"";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                    </div>\n                    <div class=\"span3\">\n                    <label for=\"state\">State: </label>\n\n                    <input class=\"input-block-level\" id=\"state\" type=\"text\" value=\"";
  if (stack1 = helpers.state) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.state; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                    </div>\n                    <div class=\"span3\">\n                    <label for=\"zip\">Zipcode: </label>\n\n                    <input class=\"input-block-level\" id=\"zip\" type=\"text\" value=\"";
  if (stack1 = helpers.zip) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.zip; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                    </div>\n                    <div class=\"span3\">\n                    <label for=\"country\">Country: </label>\n\n                    <input class=\"input-block-level\" id=\"country\" type=\"text\" value=\"";
  if (stack1 = helpers.country) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.country; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                    </div>\n\n\n            </div>\n            <div class=\"controls controls-row\">\n\n                <div class=\"span6\">\n                <label for=\"phone\">Phone: </label><input class=\"input-block-level\" id=\"phone\" type=\"text\" value=\"";
  if (stack1 = helpers.phone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phone; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                </div>\n                <div class=\"span6\">\n\n                <label for=\"email\">Email: </label><input class=\"input-block-level\" id=\"email\" type=\"text\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n              <button data-dismiss=\"modal\" class=\"btn\" id=\"save-contact\">Save</button>\n              <button data-dismiss=\"modal\" class=\"btn btn-danger\" id=\"\">Cancel</button>\n\n        </div>\n        </form>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n";
  return buffer;
  });

this["invoice"]["Templates"]["contact_entry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<td>";
  if (stack1 = helpers.companyName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.companyName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </td>\n<td>";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </td>\n<td>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.state) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.state; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </td>\n<td>";
  if (stack1 = helpers.country) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.country; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.phone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phone; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td><a id=\"edit-contact\" data-toggle=\"modal\" href=\"#edit-contact-modal\">Edit</a>\n<div id=\"edit-contact-container\"></div></td>\n<td><a id=\"delete-contact\" href=\"#\">Delete</a></td>\n";
  return buffer;
  });

this["invoice"]["Templates"]["contact_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row-fluid\">\n<h2>Contacts</h2>\n<div id=\"new-contact-container\">\n<a class=\"btn\" href=\"#new-contact-modal\" id=\"new-contact\" data-toggle=\"modal\">New Contact</a>\n</div>\n<br>\n<table class=\"table\">\n<thead>\n	<td>Company</td>\n	<td>First Name</td>\n	<td>Last Name</td>\n	<td>Address</td>\n	<td></td>\n	<td></td>\n	<td></td>\n	<td>Phone</td>\n	<td>Email</td>\n	<td></td>\n	<td></td>\n</thead>\n<tbody>\n\n</tbody>\n</table>\n\n</div>\n";
  });

this["invoice"]["Templates"]["contact_new"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"new-contact-modal\" class=\"modal hide fade\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h3>New Contact</h3>\n    </div>\n\n    <div class=\"controls\">\n        <div class=\"modal-body\">\n            <form id=\"add-contact-form\">\n            <div class=\"controls controls-row\">\n                <div class=\"span12\">\n                <label for=\"companyName\">Company: </label>\n                <input class=\"input-block-level\" id=\"companyName\" type=\"text\" />\n                </div>\n            </div>\n            <div class=\"controls controls-row\">\n                <div class=\"span6\">\n                <label  for=\"firstName\">First Name: </label>\n                <input class=\"input-block-level\" id=\"firstName\" type=\"text\" />\n                </div>\n                <div class=\"span6\">\n                <label for=\"lastName\">Last Name: </label>\n                <input class=\"input-block-level\" id=\"lastName\" type=\"text\" />\n                </div>\n            </div>\n            <div class=\"controls controls-row\">\n                <div class=\"span12\">\n                <label for=\"address\">Address: </label>\n                <input class=\"input-block-level\" id=\"address\" type=\"text\" />\n                </div>\n            </div>\n            <div class=\"controls controls-row\">\n                    <div class=\"span3\">\n                    <label for=\"city\">City: </label>\n\n                    <input class=\"input-block-level\" id=\"city\" type=\"text\" />\n                    </div>\n                    <div class=\"span3\">\n                    <label for=\"state\">State: </label>\n\n                    <input class=\"input-block-level\" id=\"state\" type=\"text\" />\n                    </div>\n                    <div class=\"span3\">\n                    <label for=\"zip\">Zipcode: </label>\n\n                    <input class=\"input-block-level\" id=\"zip\" type=\"text\" />\n                    </div>\n                    <div class=\"span3\">\n                    <label for=\"country\">Country: </label>\n\n                    <input class=\"input-block-level\" id=\"country\" type=\"text\" />\n                    </div>\n\n\n            </div>\n            <div class=\"controls controls-row\">\n\n                <div class=\"span6\">\n                <label for=\"phone\">Phone: </label><input class=\"input-block-level\" id=\"phone\" type=\"text\" />\n                </div>\n                <div class=\"span6\">\n\n                <label for=\"email\">Email: </label><input class=\"input-block-level\" id=\"email\" type=\"text\" />\n                </div>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n              <button data-dismiss=\"modal\" class=\"btn\" id=\"add-contact\">Add</button>\n              <button data-dismiss=\"modal\" class=\"btn btn-danger\" id=\"\">Cancel</button>\n\n        </div>\n        </form>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n";
  });

this["invoice"]["Templates"]["contact_show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["invoice"]["Templates"]["invoice_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			  <option value=\"";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n			  ";
  return buffer;
  }

  buffer += "<form id=\"edit-invoice-form\">\n<div class=\"row-fluid\">\n<h2>Invoice</h2>\n\n	<div class=\"controls controls-row\">\n	<div class=\"span3\">\n	<h4>Title:</h4>\n	</div>\n	<input type=\"text\" id=\"title\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></div>\n\n	<div class=\"controls controls-row\">\n<div class=\"span3\">\n	<h4>Date:</h4>\n</div>\n	<input type=\"text\" class=\"datepicker\" id=\"date\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></div>\n	<div class=\"controls controls-row\">\n<div class=\"span3\">\n	<h4>Due Date:</h4>\n</div>\n	<input type=\"text\" class=\"datepicker\" id=\"dueDate\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.dueDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n	<div class=\"controls controls-row\">\n<div class=\"span3\">\n	<h4>Status:</h4>\n</div>\n\n	<select id=\"status\">\n		<option selected>\n			"
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</option>\n		<option>pending</option>\n		<option>paid</option>\n		<option>archived</option>\n	</select>\n</div>\n\n\n</div>\n<div class=\"row-fluid\">\n	<div class=\"span2\">\n		<h3>From:</h3>\n		</div>\n		<div class=\"span3\">\n\n			<select class=\"input-block-level\" id=\"employeeId\">\n			<option value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.cid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" selected> "
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </option>\n		    ";
  stack2 = helpers.each.call(depth0, depth0.contacts, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</select>\n\n	</div>\n	<div class=\"span2\">\n		<h3>To:</h3>\n		</div>\n		<div class=\"span3\">\n			<select class=\"input-block-level\" id=\"clientId\">\n				<option value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.cid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" selected>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n		    ";
  stack2 = helpers.each.call(depth0, depth0.contacts, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</select>\n\n	</div>\n\n</div>\n\n	<button class=\"btn\" id=\"save-invoice\">Save</button>\n	<button class=\"btn btn-danger\" id=\"cancel-invoice\">Cancel</button>\n	</form>";
  return buffer;
  });

this["invoice"]["Templates"]["invoice_entry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n	<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.pref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </td>\n	<td> "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n	<td> "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </td>\n	<td> "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.dueDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </td>\n	<td> "
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n	<td> "
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </td>\n	<td> "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "  </td>\n	<td><a href=\"#\" id=\"show-invoice\">Show</a></td>\n	<td><a href=\"#\" id=\"delete-invoice\">Delete</a></td>";
  return buffer;
  });

this["invoice"]["Templates"]["invoice_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row-fluid\">\n\n\n<div id=\"show-invoice-container\">\n\n</div>\n\n<div id=\"list-invoice-container\">\n<h2>Invoices</h2>\n<a class=\"btn\" href=\"#new-invoice-modal\" id=\"new-invoice\" data-toggle=\"modal\">New Invoice</a>\n<div id=\"new-invoice-container\">\n\n</div>\n\n\n	<table class=\"table\">\n	<thead>\n		<td>id</td>\n		<td>title</td>\n		<td>date</td>\n		<td>due</td>\n		<td>from</td>\n		<td>to</td>\n		<td>status</td>\n		<td>actions</td>\n		<td></td>\n	</thead>\n	<tbody>\n	</tbody>\n	</table>\n</div>\n\n</div>";
  });

this["invoice"]["Templates"]["invoice_new"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			  <option value=\"";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n			  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			  <option value=\"";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n\n			  ";
  return buffer;
  }

  buffer += "<div id=\"new-invoice-modal\" class=\"modal hide fade\">\n	<div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>New Invoice</h3>\n  </div>\n  <div class=\"controls\">\n  	<div class=\"modal-body\">\n\n		<form id=\"add-invoice-form\">\n		    <div class=\"controls controls-row\">\n		    <div class=\"span2\">\n		    <label for=\"pref\">Id: </label>\n		    <input class=\"input-block-level\" id=\"pref\" type=\"text\" />\n		    </div>\n		    <div class=\"span10\">\n		    <label for=\"title\">Title: </label>\n			<input class=\"input-block-level\" id=\"title\" type=\"text\" />\n			</div>\n			</div>\n\n			<div class=\"controls-row\">\n				<div class=\"span6\">\n			<label for=\"date\">Date: </label>\n			<input  class=\"datepicker input-block-level\" id=\"date\" type=\"text\" />\n</div>\n<div class=\"span6\">\n			<label for=\"dueDate\">Due Date: </label>\n			<input class=\"datepicker input-block-level\" id=\"dueDate\" type=\"text\" />\n			</div>\n			</div>\n\n			<div class=\"controls-row\">\n				<div class=\"span6\">\n		    <label for=\"employee\">From: </label>\n\n		    <select class=\"input-block-level\" id=\"employeeId\">\n		    ";
  stack1 = helpers.each.call(depth0, depth0.contacts, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</select>\n</div>\n<div class=\"span6\">\n			<label for=\"client\">To: </label>\n\n			<select class=\"input-block-level\" id=\"clientId\">\n			  ";
  stack1 = helpers.each.call(depth0, depth0.contacts, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</select>\n</div>\n			</div>\n			</div>\n			<div class=\"modal-footer\">\n			    <button class=\"btn\" data-dismiss=\"modal\" id=\"add-invoice\">Add</button>\n				<button class=\"btn btn-danger\" data-dismiss=\"modal\" id=\"\">Cancel</button>\n			</div>\n		</form>\n	</div>\n</div>";
  return buffer;
  });

this["invoice"]["Templates"]["invoice_show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n\n<div id=\"edit-invoice-container\">\n</div>\n<div id=\"invoice-info\">\n<div class=\"row-fluid\">\n\n<h2>Invoice</h2>\n<h3>Title: "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n<h4>Date: "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n<h4>Due Date: "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.dueDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n<h4>Status: "
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n</div>\n<div class=\"row-fluid\">\n	<div class=\"span2\">\n		<h3>From:</h3>\n		</div>\n		<div class=\"span3\">\n		<ul class=\"unstyled\">\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.companyName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.country)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.employee),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n		</ul>\n\n	</div>\n	<div class=\"span2\">\n		<h3>To:</h3>\n		</div>\n		<div class=\"span3\">\n			<ul class=\"unstyled\">\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.companyName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.country)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n			<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n		</ul>\n	</div>\n</div>\n\n	<a href=\"#\" id=\"edit-invoice\" class=\"btn\">Edit</a>\n	<a href=\"#\" id=\"print-invoice\" class=\"btn\">Print</a>\n	<a href=\"#\" id=\"close-invoice\" class=\"btn\">Close</a>\n\n</div>\n<div id=\"list-service-container\">\n\n</div>\n<div id=\"new-service-container\">\n\n</div>\n\n<a href=\"#\" id=\"new-service\" class=\"btn\">Add Service</a>\n\n<div class=\"row-fluid\">\n<div class=\"offset6\">\n<h2>Summary</h2>\n<div class=\"span4 pull-right\">\n<ul class=\"unstyled\">\n	<li>SubTotal</li>\n	<li>Taxes</li>\n	<li>Total</li>\n</ul>\n</div>\n<div class=\"span4 pull-right\">\n<ul class=\"unstyled\">\n	<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.subtotal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n	<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.taxes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n	<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.invoice),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n</ul>\n</div>\n</div>\n\n</div>\n\n\n\n";
  return buffer;
  });

this["invoice"]["Templates"]["service_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td colspan=\"5\">\n<form id=\"edit-service-form\">\n	<div class=\"controls controls-row\">\n\n	<div class=\"span4\">\n    <input class=\"input-block-level\" id=\"description\" value=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" />\n	</div>\n\n\n\n	<div class=\"span2\">\n\n	<input class=\"input-block-level\" id=\"time\" value=\"";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" />\n	</div>\n\n\n	<div class=\"span2\">\n\n	<input class=\"input-block-level\" id=\"rate\" value=\"";
  if (stack1 = helpers.rate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" />\n	</div>\n\n\n	<div class=\"span4\">\n	<button class=\"btn\" id=\"save-service\">Save</button>\n	<button class=\"btn btn-danger\" id=\"cancel-edit-service\">Cancel</button>\n	</div>\n\n	</div>\n</form>\n</td>";
  return buffer;
  });

this["invoice"]["Templates"]["service_entry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<td>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.rate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.cost) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cost; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td><a href=\"#\" id=\"edit-service\">Edit</a>\n<a href=\"#\" id=\"delete-service\">Remove</a></td>\n";
  return buffer;
  });

this["invoice"]["Templates"]["service_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row-fluid\">\n<h2>Services</h2>\n\n<table class=\"table\">\n	<thead>\n		<td>Description</td>\n		<td>Hours</td>\n		<td>Rate</td>\n		<td>Total</td>\n		<td></td>\n	</thead>\n\n	<tbody>\n\n	</tbody>\n\n</table>\n\n\n</div>";
  });

this["invoice"]["Templates"]["service_new"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<form id=\"add-service-form\">\n	<div class=\"controls controls-row\">\n	<div class=\"span4\">\n    <input class=\"input-block-level\" id=\"description\" placeholder=\"description\" type=\"text\" />\n	</div>\n	<div class=\"span2\">\n	<input class=\"input-block-level\" id=\"time\" placeholder=\"hours\" type=\"text\" />\n	</div>\n\n	<div class=\"span2\">\n\n	<input class=\"input-block-level\" id=\"rate\" placeholder=\"rate\" type=\"text\" />\n	</div>\n\n	<div class=\"span4\">\n	<button class=\"btn\" id=\"add-service\">Add</button>\n	<button class=\"btn btn-danger\" id=\"\">Cancel</button>\n	</div>\n	</div>\n</form>";
  });