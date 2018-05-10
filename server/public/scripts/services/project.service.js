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
    self.entries = {
        entries: []
    };

    self.newEntry = {
        entry_name: '',
        project_id: '',
        date: '',
        hours: 0
    };

    self.getEntries = function() {
        $http({
            method: 'GET',
            url: '/entries'
        })
        .then(function(results) {
            self.entries.entries = results.data
            console.log(self.entries.entries);
        })
        .catch(function(error) {
            console.log(`error making get entries ${error}`)
        })
    };

    self.getProjectId = function() {
        let selectedProject = document.getElementById('projectNameSelect');
        let val = selectedProject.options[selectedProject.selectedIndex].value;
        self.newEntry.project_id = Number(val);   
    };

    self.getDate = function() {
        let dateArray = document.getElementById('entryDate').value.split('-');
        let formattedDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
        console.log(formattedDate);
        self.newEntry.date = formattedDate;
    };

    self.postEntry = function() {
        self.getProjectId();
        self.getDate();
        console.log(self.newEntry);        
    };



    // self.calculateHours = function() {

    // };

  
    
}]);