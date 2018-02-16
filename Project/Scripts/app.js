var app = angular.module("app", []);

app.factory("registeredUserService", function()
{
	var userList = [];
	return{
		getRegisteredUserList : function()
		{
			console.log("in get method of service: " + JSON.stringify(this.userList));
			return this.userList;
			
		},
		setRegisteredUserList : function(data) 
		{
			this.userList = data;
			console.log("in UserList: " + JSON.stringify(this.userList));
		}
	}
}
);


