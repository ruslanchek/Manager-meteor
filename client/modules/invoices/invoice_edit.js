Template.invoiceEdit.helpers({

});

updateInvoice = function(id, props){
	Invoices.update(id, {
        $set: props
    }, function(error) {
        if (error) {
            alert(error.reason);
        } else {
            Router.go('invoiceEdit', {
                _id: id
            });
        }
    });
};

Template.invoiceEdit.events({
    'submit form#invoice-edit': function(e) {
        e.preventDefault();

        updateInvoice(this.invoice._id, {
            title: $(e.target).find('[name=title]').val()
        });
    },

    'click .badge-payed, click .badge-not-payed': function(e) {
        e.preventDefault();

        var _this = this;

        if(this.payed){
            updateInvoice(_this._id, {
                payed: false
            });
        }else{
            var popup = new PopupSetPayedDate({
                date: this.payDate,
                onConfirm: function(date){
                    updateInvoice(_this._id, {
                        payed: true,
                        payDate: date
                    });
                }
            });

            popup.open();
        }
    }
});