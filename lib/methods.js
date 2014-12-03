getModelSorting = function(modelName, fields){
	var sort = {};

	if(Session.equals('sort' + modelName + 'Dir', 'ASC')){
		dir = 1;
	}else{
		dir = -1;
	}

	for (var i = 0; i < fields.length; i++) {
		if(Session.equals('sort' + modelName + 'By', fields[i])){
			sort[fields[i]] = dir;
			return sort;
		}
	}

	return {};
};