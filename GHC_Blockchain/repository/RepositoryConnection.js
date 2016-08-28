/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');
function RepositoryConnection(host,database){
	this.host = host;
	this.database = database;
	
}

RepositoryConnection.prototype.init = function(){
	mongoose.connect("mongodb://"+this.host+"/"+this.database); 	
}

