Module = function(options){
	var _this = this;

	this.options = _.extend({
		name: ''
	}, options);

	this.collection = new Mongo.Collection(this.options.name);
};