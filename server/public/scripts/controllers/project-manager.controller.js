app.controller('ProjectManagerController', ['ProjectService', function(ProjectService) {
    console.log('Project Manager Controller Sourced');
    var self = this;

    self.projects = ProjectService.projects;
    self.newProject = ProjectService.newProject;
    self.getProjects = ProjectService.getProjects;
    self.postProject = ProjectService.postProject;

    self.getProjects();

}]);