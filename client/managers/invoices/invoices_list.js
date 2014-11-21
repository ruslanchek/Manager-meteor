Template.invoicesList.helpers({
    invoices: function() {
        return Invoices.find({}, {
        	sort: {
        		date: -1
        	}
        });
    }
});