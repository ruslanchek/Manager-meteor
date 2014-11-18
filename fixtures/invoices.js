if (Invoices.find().count() === 0) {
    var invoices = [
        {
            payed: true,
            title: '002345',
            date: new Date(2012, 1, 13, 1, 22, 0, 0),
            payTill: new Date(),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 10000020.01,
            items: 101,
            contragent: {
                name: 'Хуй',
                id: 1,
                type: 2
            }
        },
        {
            payed: false,
            title: '002345',
            date: new Date(2012, 2, 13, 1, 22, 0, 0),
            payTill: new Date(),
            payDate: new Date(),
            price: 100000010,
            items: 103,
            contragent: {
                name: 'Нааа',
                id: 1,
                type: 1
            }
        },
        {
            payed: true,
            title: '002345',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 10000020.01,
            items: 101,
            contragent: {
                name: 'Хуй',
                id: 1,
                type: 2
            }
        },
        {
            payed: false,
            title: '002345',
            date: new Date(2002, 1, 13, 1, 22, 0, 0),
            payTill: new Date(),
            payDate: new Date(),
            price: 100000010,
            items: 103,
            contragent: {
                name: 'Нааа',
                id: 1,
                type: 1
            }
        },
        {
            payed: true,
            title: '002345',
            date: new Date(2012, 9, 13, 1, 22, 0, 0),
            payTill: new Date(),
            payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
            price: 10000020.01,
            items: 101,
            contragent: {
                name: 'Хуй',
                id: 1,
                type: 2
            }
        },
        {
            payed: false,
            title: '002345',
            date: new Date(),
            payTill: new Date(),
            payDate: new Date(),
            price: 100000010,
            items: 103,
            contragent: {
                name: 'Нааа',
                id: 1,
                type: 1
            }
        }
    ];

    for (var i = invoices.length - 1; i >= 0; i--) {
        var o = invoices[i];

        Invoices.insert(o);
    };
}