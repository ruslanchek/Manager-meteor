Handlebars.registerHelper('convertPrice', function(value) {
	if(!value){
		value = 0;
	}else{
		value = parseFloat(value);
	}

  	return numeral(value).format('0,0.[00]');
});


Handlebars.registerHelper('pluralize', function(value, forms1, forms3, forms5, addStr) {
	var output = '';

	if(value){
		var text;

		function plural (a){
			if ( a % 10 == 1 && a % 100 != 11 ) return 0;
			else if ( a % 10 >= 2 && a % 10 <= 4 && ( a % 100 < 10 || a % 100 >= 20)) return 1;
			else return 2;
		}

		switch (plural(parseFloat(value))) {
			case 0: text = forms1; break;
			case 1: text = forms3; break;
			default: text = forms5; break;
		}

		output = (addStr === true) ? value + ' ' + text : text;
	}

	return output;
});


Handlebars.registerHelper('humanizeDate', function(date) {
	return moment(date).format('D MMMM YYYY');
});


Handlebars.registerHelper('humanizeDateTime', function(date) {
	return moment(date).format('D MMMM YYYY HH:mm:ss');
});


Handlebars.registerHelper('getCompanyType', function(id) {
	var companyType = getStaticById(id, companyTypes);

	if(companyType){
		return companyType.name;
	}else{
		return '';
	}
});


Handlebars.registerHelper('countCollection', function(collection) {
	return collection.count();
});


Handlebars.registerHelper('dateGT', function(date) {
	return new Date() > date;
});


Handlebars.registerHelper('humanizeDateFrom', function(date) {
	return moment(date).fromNow();
});


Handlebars.registerHelper('formText', function(title, name, value, width, placeholder, tabindex) {
	return Blaze.toHTMLWithData(Template.formText, {
		title: title,
		name: name,
		id: 'input-' + name,
		value: value,
		width: (width) ? width : 100,
		placeholder: (placeholder) ? placeholder : '',
		tabindex: (tabindex) ? tabindex : 1 
	});
});

