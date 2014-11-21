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
	return moment(date).format('d MMMM YYYY', 'accusative');
});

Handlebars.registerHelper('getCompanyType', function(id) {
	var companyType = getStaticById(id, companyTypes);

	if(companyType){
		return companyType.name;
	}else{
		return '';
	}
});