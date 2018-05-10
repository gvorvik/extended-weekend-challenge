console.log('clientJS sourced');
var app = angular.module('TimeTrackerApp', []);

app.controller('TimeController', ['$http', function($http) {
    var self = this;
    console.log('Time Controller Sourced');
}]);