app.controller('TimeEntryController', ['TimeEntryService', function(TimeEntryService) {
    console.log('Time Entry Controller Sourced');
    var self = this;

    this.projects = TimeEntryService.projects;
    this.getProjects = TimeEntryService.getProjects;

    this.getProjects();
}]);