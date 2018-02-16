/// <reference path="app.js" />
app.controller("registerCtrl",['$scope','registeredUserService', function($scope,registeredUserService){
	
	toastr.options = {
		  "debug": false,
		  "position-class": "toast-top-full-width",
		  "onclick": null,
		  "fadeIn": 300,
		  "fadeOut": 1000,
		  "timeOut": 5000,
		  "extendedTimeOut": 1000,
		  "closeButton" : true
		}
	
	$scope.registeredUserList = [];
	
	$scope.register ={
		firstName : '',
		lastName : '',
		email : '',
		password : '',
		confirmPassword : ''
	}

	
	$scope.registerUser = function()
	{		
		if($scope.register.password.toLowerCase() != $scope.register.confirmPassword.toLowerCase())
		{
			toastr.error('Password should be same in both the field!!');

		}
		else if($scope.register.password == "" || $scope.register.firstName == "" || $scope.register.lastName == "" )
		{
			toastr.error('All fields are mandatory!!');
		}
		else
		{
			$scope.newUser = angular.copy($scope.register);
			$scope.registeredUserList.push($scope.newUser);
			toastr.success('User registered successfully!!');
			console.log("Registered users: " + JSON.stringify($scope.registeredUserList));
			registeredUserService.setRegisteredUserList(angular.copy($scope.registeredUserList));
		}
	
	}
	
}]);

app.controller("contactUsCtrl",['$scope','registeredUserService', function($scope,registeredUserService){
	$scope.contactUsList =[];
	$scope.contactUs = {
		name : '',
		email : '',
		contactNumber : '',
		comment : ''
		
	}
	
	$scope.contactUsValidate = function()
	{
		if($scope.contactUs.name == "" || $scope.contactUs.email == "" || $scope.contactUs.contactNumber == "" || $scope.contactUs.comment == "")
		{
			toastr.error("All Fields are mandatory in contact us section!!");
		}
		else{
			$scope.contactUsList.push($scope.contactUs);
			console.log($scope.contactUsList);
			toastr.success('Contact submitted successfully');
		}
	}
	
}]);

app.controller("loginCtrl",['$scope','registeredUserService', function($scope,registeredUserService){
	$scope.userName = '',
	$scope.password = ''
	
	$scope.validateAndSubmitForm = function()
	{
		var registeredUserArray = registeredUserService.getRegisteredUserList();
		
			if(registeredUserArray.length == 0)
			{
				toastr.error("User is not registered!!!").css("position-class","top-center");
				return;
			}
		for(var i=0; i < registeredUserArray; i++)
		{
			if(registeredUserArray[i].userName == $scope.userName && registeredUserArray[i].password == $scope.password)
			{
				toastr.success("Logged In successfully!");
				
			}
			else{
				toastr.error("Invalid email id or password!!!");
			}
		}
	
	}
	
}]);

