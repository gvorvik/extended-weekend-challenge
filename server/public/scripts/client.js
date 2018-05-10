console.log('clientJS sourced');

var app = angular.module('TimeTrackerApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/time-entry.html',
        controller: 'TimeEntryController as vm'
    })
    .otherwise({
        template: `<h2>404: Not Found</h2>`
    })
});