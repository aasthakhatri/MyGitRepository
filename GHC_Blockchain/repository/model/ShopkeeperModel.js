/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');
var ShopkeeperModel = (function(){
	var SCHEMA = new mongoose.Schema({ name: 'string', size: 'string' });
	var MODEL_NAME ="Shopkeeper";
	return{
		getModel: function(){
			return mongoose.model(MODEL_NAME,SCHEMA);
		}
	
		
	}
	
	
})();