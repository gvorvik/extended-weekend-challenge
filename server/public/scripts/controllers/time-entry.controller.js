app.controller('TimeEntryController', ['ProjectService', function(ProjectService) {
    console.log('Time Entry Controller Sourced');
    var self = this;

    self.newEntry = {
        entry_name: '',
        project_id: '',
        date: ''
    };

    this.projects = ProjectService.projects;
    this.getProjects = ProjectService.getProjects;

    this.logIt = function() {
        let e = document.getElementById('projectNameSelect');
        let val = e.options[e.selectedIndex].value;
        self.newEntry.project_id = Number(val);
        console.log(self.newEntry);
    };

    this.getProjects();
}]);