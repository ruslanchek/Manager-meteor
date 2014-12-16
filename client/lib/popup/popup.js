Popup = function(options){
	var _this = this,
		animated = false;

	this.options = _.extend({
		animationTime: 300,
		title: 'Title',
		template: 'popupSetPayed',
		onBeforeOpen: function(){

		},
		onOpen: function(){

		},
		onClose: function(){

		},
		onEnter: function(){

		}
	}, options);

	this.view = null;

	var animateIn = function(done){
		animated = true;

		$('.popup').transition({
			opacity: 1
		}, _this.options.animationTime);

		$('.popup .window').transition({
			scale: 1
		}, _this.options.animationTime, 'easeOutBack', function(){
			animated = false;

			if(done) done();
		});
	};

	var animateOut = function(done){
		animated = true;

		$('.popup').transition({
			opacity: 0
		}, _this.options.animationTime);

		$('.popup .window').transition({
			scale: 0
		}, _this.options.animationTime, 'easeInBack', function(){
			animated = false;

			if(done) done();
		});
	};

	this.open = function(){
		if(!this.view){
			Template.popup.events({
				'click .close': function(e) {
					e.preventDefault();
					_this.close();
				}
			});

			this.view = Blaze.renderWithData(Template.popup, {
				title: _this.options.title,
				content: Blaze.toHTMLWithData(Template[_this.options.template], {})
			}, $('body')[0]);

			_this.options.onBeforeOpen();

			animateIn(function(){
				_this.options.onOpen();
			});

			$(document).on('keyup', function(e){
				if(e.keyCode == 27){
					_this.close();
				}

				if(e.keyCode == 13){
					_this.options.onEnter();
				}
			});
		}
	};

	this.close = function(){
		if(this.view){
			$(document).off('keyup');

			animateOut(function(){
				Blaze.remove(_this.view);
				_this.view = null;
				_this.options.onClose();
			});
		}
	};
};


PopupSetPayedDate = function(options){
	var _this = this;

	this.options = _.extend({
		date: new Date(),
		onSelect: function(){

		},
		onConfirm: function(date){

		}
	}, options);

	var selected_date = this.options.date,
		popup = new Popup({
			animationTime: 300,
			title: 'Выберите дату оплаты',
			template: 'popupSetPayedDate',
			onBeforeOpen: function(){
				$('.datepicker').datepicker({
					maxDate: new Date(),
					onSelect: function(){
						_this.options.onSelect();
						selected_date = $('.datepicker').datepicker('getDate');

						var now = new Date();

						selected_date.setHours(now.getHours());
						selected_date.setMinutes(now.getMinutes());
						selected_date.setSeconds(now.getSeconds());
					}
				});

				$('.datepicker').datepicker('setDate', _this.options.date);
			},
			onOpen: function(){
				$('.popup .ok').on('click', function(e){
					console.log(selected_date)
					e.preventDefault();
					popup.close();
					_this.options.onConfirm(selected_date);
				});
			},
			onEnter: function(){
				popup.close();
				_this.options.onConfirm(selected_date);
			}
		});

	this.open = function(){
		popup.open();
	};

	this.close = function(){
		popup.close();
	};
};
