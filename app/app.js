var app = angular.module('artnet', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/about', 
                {
                    controller: 'sortsiteController',
                    templateUrl: '/app/partials/about.html'
                })
            .when('/sorting', 
                {
                    controller: 'sortsiteController',
                    templateUrl: '/app/partials/sorting.html'
                })
            .when('/', 
                {
                    controller: 'sortsiteController',
                    templateUrl: '/app/partials/welcome.html'
                })
            .otherwise({ redirectTo: '/' });
    });

    app.config(function ($httpProvider) {
        app.$httpProvider = $httpProvider;
    });