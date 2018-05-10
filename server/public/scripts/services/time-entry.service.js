app.service('TimeEntryService', ['$http', function($http) {
    console.log('Time Entry Service... Hello!');
    var self = this;

    // Project View Entries
    self.projects = {
        projects: []
    };

    self.newProject = {
        name: '',
        sqft: '',
    };

    self.getProjects = function() {
        console.log('button clicked');
        $http({
            method: 'GET',
            url: '/projects'
        })
        .then(function(results) {
            self.projects.projects = results.data;
            console.log(self.projects);
        })
        .catch(function(error) {
            console.log(`error in get request ${error}`);
        });
    };

    self.postProject = function() {
        console.log(self.newProject);
        
        $http({
            method: 'POST',
            url: '/projects',
            data: self.newProject
        })
        .then(function(results) {
            console.log(results);
        })
        .catch(function(error) {
            console.log(`error in get request ${error}`);
        });
    };
    
}]);