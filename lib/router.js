Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: '404'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });

    this.route('invoicesList', {
        path: '/invoices',
        data: function(){
            var invoices = Invoices.find({}, {
                sort: getModelSorting('Invoices', ['date', 'title', 'payed', 'price'])
            });

            return {
                h1: 'Счета',
                invoices: invoices,
                count: invoices.count()
            }
        }
    });

    this.route('invoiceEdit', {
        path: '/invoices/:_id',
        data: function(){
        	var invoice = Invoices.findOne(this.params._id);

        	return {
        		invoice: invoice
        	}
        }
    });
});
