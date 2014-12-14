Popup = function(template){
	var _this = this;
	this.view = null;

	var animateIn = function(done){
		$('.popup').transition({
			opacity: 1
		}, 300);

		$('.popup .window').transition({
			scale: 1
		}, 300, 'easeOutBack', function(){
			if(done) done();
		});
	};

	var animateOut = function(done){
		$('.popup').transition({
			opacity: 0
		}, 300);

		$('.popup .window').transition({
			scale: 0
		}, 300, 'easeInBack', function(){
			if(done) done();
		});
	};

	this.open = function(){
		if(!this.view){
			this.view = Blaze.renderWithData(Template.popup, {
				title: 'Title',
				content: Blaze.toHTMLWithData(template, {})
			}, $('body')[0]);

			animateIn();

			$(document).on('keyup', function(e){
				if(e.keyCode == 27){
					_this.close();
				}
			});
		}
	};

	this.close = function(){
		if(this.view){
			$(document).off('keyup');

			$('.popup .window').transition({
				scale: 1
			}, 300, 'easeOutBack', function(){
				animateOut(function(){
					Blaze.remove(_this.view);
					_this.view = null;
				});
			});
		}
	};
};