app.controller('TimeEntryController', ['ProjectService', function(ProjectService) {
    console.log('Time Entry Controller Sourced');
    var self = this;

    this.projects = ProjectService.projects;
    this.getProjects = ProjectService.getProjects;

    this.getProjects();
}]);