app.controller("beansController", function($scope, $log, mainService) {
	$scope.config = {
		hasSelectAll : false,
		isMultiSelect : false
	}

	$scope.contactUS = {
		name : '',
		email : '',
		contactNumber : '',
		comment : ''
		
	}
	
	$scope.genders = [ {
		key : 'Male',
		value : 'M',
	}, {
		key : 'Female',
		value : 'F',
	}, ]

	$scope.isAuthorized = [
			                  {
			                	  'name':'Yes',
			                	  'value':'Y'
			                  },
			                  {
			                	  'name':'No',
			                	  'value':'N'
								  }
			                 ]	
})
