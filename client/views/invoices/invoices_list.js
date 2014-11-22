Template.invoicesList.helpers({

});

Template.invoicesList.events({
    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete?")) {
            Invoices.remove(currentPostId);
            Router.go('invoicesList');
        }
    }
});