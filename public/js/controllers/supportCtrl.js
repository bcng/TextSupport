app.controller('supportCtrl', function($scope, $firebaseObject) {

	// creates a new instance of FB db data
	var firebaseRef = new Firebase('https://text-support-nodejs.firebaseio.com/numbers');

	var obj = $firebaseObj(ref);

	obj.$loaded().then(function(){
		$scope.numbers = 
	})
    
    // download the data into a local object
    // $scope.numbers = $firebaseObject(firebaseRef);

});
