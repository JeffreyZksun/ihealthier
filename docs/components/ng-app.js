
// Define the app module. Load the dependencies to $injector.
var app = angular.module('webapp',  ["ngRoute", 'ngResource']);

app.run(["$rootScope", "$resource", "$location", "$window", "$timeout",
	function ($rootScope, $resource, $location, $window, $timeout) {
		$rootScope.endpoint = "https://api.xively.com/v2";

        $rootScope.t = "iheathier"; // page title, use a short string
        $rootScope.feed_id = "538406686";
        xively.setKey( "7YbrZ4vltQFfG9suUeriDOSEcfhE7M9l1o7eAczAGVfPOPR3" ); 
    }
] );

var pageMap = {
    '/main': {
        templateUrl: 'components/main/ui.html',
        controller: 'mainController'
    },
    '/data': {
        templateUrl: 'components/data/ui.html',
        controller: 'dataController'
    }
}

// provider-injector
app.config([ '$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider) {

            for(var p in pageMap){
                $routeProvider.when(p, {
                    templateUrl : pageMap[p].templateUrl,
                    controller : pageMap[p].controller
                });
            }

            $routeProvider.otherwise({
                redirectTo : '/main'
            });

        } ]);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



