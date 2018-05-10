app.service('ProjectService', ['$http', function($http) {
    console.log('Project Service... Hello!');
    var self = this;

    // Project View Entries
    self.projects = {
        projects: []
    };

    self.newProject = {
        project_name: '',
        sqft: '',
        total_hours: 0,
    };

    self.getProjects = function() {
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
        $http({
            method: 'POST',
            url: '/projects',
            data: self.newProject
        })
        .then(function(results) {
            self.getProjects();
        })
        .catch(function(error) {
            console.log(`error in get request ${error}`);
        });
    };

    self.deleteProject = function(id) {
        $http({
            method: 'DELETE',
            url: `/projects/${id}`
        })
        .then(function(response) {
            self.getProjects();
        })
        .catch(function(error) {
            console.log(`Error with delete request, ${error}`);
        });
    };
    
    //Time Entry Entries

    
}]);