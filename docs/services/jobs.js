app.factory('jobs', [
'$rootScope',
function($rootScope){

	var jobs = {};

	jobs.list = [];

  	return jobs;
}]);