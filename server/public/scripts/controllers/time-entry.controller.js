app.controller('TimeEntryController', ['ProjectService', function(ProjectService) {
    console.log('Time Entry Controller Sourced');
    var self = this;

    self.entries = ProjectService.entries;
    self.newEntry = ProjectService.newEntry;
    self.getEntries = ProjectService.getEntries;
    self.projects = ProjectService.projects;
    self.getProjects = ProjectService.getProjects;
    self.getProjectId = ProjectService.getProjectId; 
    self.getDate = ProjectService.getDate;
    self.postEntry = ProjectService.postEntry;


    self.getProjects();
    self.getEntries();
}]);