Handlebars.registerHelper('inputText', function(title, name, value, width, placeholder, tabindex) {
	return Blaze.toHTMLWithData(Template.inputText, {
		title: title,
		name: name,
		id: 'input-' + name,
		value: value,
		width: (width) ? width : 100,
		placeholder: (placeholder) ? placeholder : '',
		tabindex: (tabindex) ? tabindex : 1 
	});
});