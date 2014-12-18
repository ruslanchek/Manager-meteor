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
