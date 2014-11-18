Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: '404'
});

Router.route('/', function() {
    this.render('home', {
        data: function() {
           
        }
    });
});