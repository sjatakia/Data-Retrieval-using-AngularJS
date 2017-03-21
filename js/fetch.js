	(function() {
		var name = "myApp",
			requires = [],
			myApp = null;
		
		myApp = angular.module(name, requires);

			myApp.controller("myCtrl", function($scope,$http) {
				$scope.sortby="Released";
				$scope.initial="";
				$scope.searchByInit=false;
				$scope.showDefault=false;
				$scope.statusText="Error in retriving data"
				$http({
				        method : "GET",
				        url : "http://www.omdbapi.com/?i=tt0092455&season=4&ref_=tt_eps_sn_4"
				    }).then(function mySucces(response) {
				        $scope.seasons = response.data;
				    }, function myError(response) {
				        $scope.seasons = response.statusText;
				    });
				$scope.titleInit = function(entry) {
					return (!$scope.searchByInit || entry.Title[0]==$scope.initial);
				}
				$scope.initialFunc = function() {
					$scope.searchByInit=true;
					$scope.showDefault=true;
				}
				$scope.default = function() {
					$scope.sortby="Released";
					$scope.inital="";
					$scope.searchByInit=false;
					$scope.showDefault=false;
				}				
				$scope.chars=[
				{value: 'A', name: 'A'},{value: 'B', name: 'B'},{value: 'C', name: 'C'},
				{value: 'D', name: 'D'},{value: 'E', name: 'E'},{value: 'F', name: 'F'},
				{value: 'G', name: 'G'},{value: 'H', name: 'H'},{value: 'I', name: 'I'},
				{value: 'J', name: 'J'},{value: 'K', name: 'K'},{value: 'L', name: 'L'},
				{value: 'M', name: 'M'},{value: 'N', name: 'N'},{value: 'O', name: 'O'},
				{value: 'P', name: 'P'},{value: 'Q', name: 'Q'},{value: 'R', name: 'R'},
				{value: 'S', name: 'S'},{value: 'T', name: 'T'},{value: 'U', name: 'U'},
				{value: 'V', name: 'V'},{value: 'W', name: 'W'},{value: 'X', name: 'X'},
				{value: 'Y', name: 'Y'},{value: 'Z', name: 'Z'}
				];
        		});
	}());