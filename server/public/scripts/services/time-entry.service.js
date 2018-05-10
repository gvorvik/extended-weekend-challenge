app.service('TimeEntryService', ['$http', function($http) {
    console.log('Time Entry Service... Hello!');
    var self = this;

    // Project View Entries
    self.projects = {
        projects: []
    };

    self.getProjects = function() {
        console.log('button clicked');
    };

    self.postProject = function() {
        console.log('button clicked');
    };
    
}]);