companyTypes = [
	{id: 1, name: 'ООО'},
	{id: 2, name: 'ИП'},
	{id: 3, name: 'ОАО'},
	{id: 4, name: 'ЗАО'},
	{id: 5, name: 'АНО'}
];

getStaticById = function(id, data){
	return _.find(data, function(item){ 
		return item.id == id; 
	});
};