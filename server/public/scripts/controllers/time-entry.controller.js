app.controller('TimeEntryController', ['ProjectService', '$mdDialog', function(ProjectService, $mdDialog) {
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
    self.deleteEntry = ProjectService.deleteEntry;

    self.removeEntry = function(entry) {
        var confirm = $mdDialog.confirm()
            .title(`Are you sure you want to delete this entry?`)
            .ok(`Delete Entry`)
            .cancel(`Don't Delete Entry`);
        
        $mdDialog.show(confirm).then(function() {
            self.deleteEntry(entry.id);
        }, function() {
            console.log('Delete Cancelled');
        });
    };

    self.getProjects();
    self.getEntries();
}]);