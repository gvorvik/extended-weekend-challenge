app.controller('ProjectManagerController', ['TimeEntryService', function(TimeEntryService) {
    console.log('Project Manager Controller Sourced');
    var self = this;

    self.projects = TimeEntryService.projects;
    self.newProject = TimeEntryService.newProject;
    self.getProjects = TimeEntryService.getProjects;
    self.postProject = TimeEntryService.postProject;

    self.getProjects();

}]);