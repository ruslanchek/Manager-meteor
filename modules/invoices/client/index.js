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

        updateInvoice(this._id, {
            payed: (this.payed) ? false : true,
            payDate: new Date()
        });
    }
});



Template.invoicesList.helpers({

});

Template.invoicesList.events({
    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete?")) {
            Invoices.remove(this._id);
            //Router.go('invoicesList');
        }
    },

    'click [data-role="sort"]': function(e) {
        e.preventDefault();

        var $target = $(e.target),
            data = $target.data();

        Session.set('sortInvoicesBy', data.sortby);
        Session.set('sortInvoicesDir', data.sortdir);

        if (data.sortdir == 'ASC') {
            $target.data('sortdir', 'DESC');
        } else {
            $target.data('sortdir', 'ASC');
        }
    }
});