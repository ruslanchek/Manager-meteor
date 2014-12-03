if (Invoices.find().count() === 0) {
    var invoices = [
        {
            payed: true,
            title: '1',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(2012, 9, 13, 1, 22, 0, 0),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 589000.01,
            items: 10,
            contragent: {
                name: 'Нефтьмагистраль',
                id: 1,
                type: 3
            }
        },
        {
            payed: false,
            title: '2',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(2012, 9, 13, 1, 22, 0, 0),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 120000,
            items: 2,
            contragent: {
                name: 'Альфабанк',
                id: 1,
                type: 1
            }
        },
        {
            payed: true,
            title: '3',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(2012, 9, 13, 1, 22, 0, 0),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 7205.55,
            items: 1,
            contragent: {
                name: 'Какашкин Б.В.',
                id: 1,
                type: 2
            }
        },
        {
            payed: false,
            title: '4',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(2012, 9, 13, 1, 22, 0, 0),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 900200,
            items: 2,
            contragent: {
                name: 'Итегра',
                id: 1,
                type: 1
            }
        },
        {
            payed: true,
            title: '5',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(2012, 9, 13, 1, 22, 0, 0),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 10000,
            items: 3,
            contragent: {
                name: 'Дженерал Слатс',
                id: 1,
                type: 1
            }
        },
        {
            payed: false,
            title: '6',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(2012, 9, 13, 1, 22, 0, 0),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 3407800,
            items: 4,
            contragent: {
                name: 'Альфабанк',
                id: 1,
                type: 4
            }
        }
    ];

    for (var i = invoices.length - 1; i >= 0; i--) {
        var o = invoices[i];

        Invoices.insert(o);
    };
}