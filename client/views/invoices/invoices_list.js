Template.invoicesList.helpers({

});

Template.invoicesList.events({
    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete?")) {
            Invoices.remove(this._id);
            Router.go('invoicesList');
        }
    }
});