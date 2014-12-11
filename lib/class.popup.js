Popup = function(template){
	var _this = this;
	this.view = null;

	this.open = function(){
		if(!this.view){
			this.view = Blaze.renderWithData(Template.popup, {
				title: 'Title',
				content: Blaze.toHTMLWithData(template, {})
			}, $('body')[0]);

			$('.popup .window').transition({
			  	perspective: '100px',
			  	rotateX: '180deg'
			}, 1000);
		}
	};

	this.close = function(){
		if(this.view){
			Blaze.remove(_this.view);
			_this.view = null;
		}
	};
};