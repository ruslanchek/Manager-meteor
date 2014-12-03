getModelSorting = function(modelName, fields){
	var sort = {},
		dir = 1;

	if(Session.equals('sort' + modelName + 'Dir', 'DESC')){
		dir = -1;
	}

	for (var i = 0; i < fields.length; i++) {
		if(Session.equals('sort' + modelName + 'By', fields[i])){
			sort[fields[i]] = dir;
			return sort;
		}
	}

	return sort;
};