Popup = function(){
	this.view = null;

	this.open = function(){
		if(!this.view){
			this.view = Blaze.renderWithData(Template.popup, {
				title: 'Title',
				content: 'Content'
			}, $('body')[0]);

			
Template.popup.events({
    'click .close': function(e) {
        e.preventDefault();

        alert('close')
    }
});
		}
	};

	this.close = function(){
		if(this.view){
			Blaze.remove(this.view);
			this.view = null;
		}
	};
};
