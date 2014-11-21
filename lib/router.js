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
        data: {
        	h1: 'Счета'
        }
    });

    this.route('invoiceEdit', {
        path: '/invoices/:_id',
        data: function(){
        	var invoice = Invoices.findOne(this.params._id);

        	return {
        		h1: 'Редактирование счета №' + invoice.title,
        		invoice: invoice
        	}
        }
    });
});

