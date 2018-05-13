app.controller('ProjectManagerController', ['ProjectService', '$mdDialog', function(ProjectService, $mdDialog) {
    console.log('Project Manager Controller Sourced');
    var self = this;

    self.projects = ProjectService.projects;
    self.newProject = ProjectService.newProject;
    self.getProjects = ProjectService.getProjects;
    self.postProject = ProjectService.postProject;
    self.deleteProject = ProjectService.deleteProject;

    self.removeProject = function(project) {
        var confirm = $mdDialog.confirm()
            .title(`Are you sure you want to delete this project?`)
            .ok(`Delete Project`)
            .cancel(`Don't Delete Project`);
        
        $mdDialog.show(confirm).then(function() {
            self.deleteProject(project.id);
        }, function() {
            console.log('Delete Cancelled');
        });
    };

    self.getProjects();

}]);