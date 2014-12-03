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

        if(data.sortdir == 'ASC'){
			$target.data('sortdir', 'DESC'); 
        }else{
        	$target.data('sortdir', 'ASC');
        }
    }
});