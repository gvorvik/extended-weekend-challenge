app.controller('ProjectManagerController', ['TimeEntryService', function(TimeEntryService) {
    console.log('Project Manager Controller Sourced');
    var self = this;

    self.projects = TimeEntryService.prjects;
    self.getProjects = TimeEntryService.getProjects;
    self.postProject = TimeEntryService.postProject;

}]);