/**

**/
app.controller('dataController', [
'$rootScope',
'$scope',
'$routeParams',
'$location',
function($rootScope, $scope, $routeParams, $location) {
    $scope.feedData = "loading..."
 //    xively.feed.get( $rootScope.feed_id, function( data ) {  
 //  		$scope.feedData=data;
 //  		$scope.$digest();
	// }); 

	var options = {
		duration: "3hours",
		interval: 10 // set the data points interval is 10s.
	}
	xively.feed.history( $rootScope.feed_id, options, function( data ) {  
  		$scope.feedData=data;
  		$scope.$digest();
	}); 
    
 }]);