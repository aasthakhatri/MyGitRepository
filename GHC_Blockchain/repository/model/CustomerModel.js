/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');
var CustomerModel = (function(){
	var SCHEMA = new mongoose.Schema({name :'String',password:'String'});
	var MODEL_NAME = "Customer";
	return{
		getModel : function(){
			return mongoose.model(MODEL_NAME,SCHEMA);
		}
	}
	
	
})();