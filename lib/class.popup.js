Popup = function(template){
	var _this = this;
	this.view = null;

	this.open = function(){
		if(!this.view){
			this.view = Blaze.renderWithData(Template.popup, {
				title: 'Title',
				content: Blaze.toHTMLWithData(template, {})
			}, $('body')[0]);

			setTimeout(function(){
				$('.popup .window').addClass('reveal');

				setTimeout(function(){
					$('.popup .window').addClass('back');	
				}, 300);
			}, 50);
		}
	};

	this.close = function(){
		if(this.view){
			$('.popup .window').removeClass('reveal');

			setTimeout(function(){
				Blaze.remove(_this.view);
				_this.view = null;
			}, 300);
		}
	};
};