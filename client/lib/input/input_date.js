Handlebars.registerHelper('inputDate', function(title, name, value, width, placeholder, tabindex) {
	return Blaze.toHTMLWithData(Template.inputDate, {
		title: title,
		name: name,
		id: 'input-date-' + name,
		value: value,
		width: (width) ? width : 100,
		placeholder: (placeholder) ? placeholder : '',
		tabindex: (tabindex) ? tabindex : 1 
	});
});