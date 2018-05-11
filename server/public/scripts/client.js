console.log('clientJS sourced');

var app = angular.module('TimeTrackerApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'md.data.table']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/project-manager.html',
            controller: 'ProjectManagerController as vm'
        })
        .when('/entries', {
            templateUrl: 'views/time-entry.html',
            controller: 'TimeEntryController as vm'
        })
        .otherwise({
            template: `<h2>404: Not Found</h2>`
        });
});