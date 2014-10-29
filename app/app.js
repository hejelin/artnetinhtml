var app = angular.module('artnet', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/artnet.html'
                })
            .when('/calendar', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/calendar.html'
                })
            .when('/explore', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/explore.html'
                })
            .when('/list', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/list.html'
                })
            .when('/map', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/map.html'
                })
            .when('/museum', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/museum.html'
                })
            
            .when('/profile', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/profile.html'
                })
            .when('/settings', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/settings.html'
                })
            .when('/artpiece', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/artpiece.html'
                })
            .when('/artpiece-rate', 
                {
                    controller: 'artnetController',
                    templateUrl: '/app/partials/artpiece-rate.html'
                })
            
            .otherwise({ redirectTo: '/' });
    });

    app.config(function ($httpProvider) {
        app.$httpProvider = $httpProvider;
    });