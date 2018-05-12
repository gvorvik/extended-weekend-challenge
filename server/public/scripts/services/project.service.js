app.service('ProjectService', ['$http', function ($http, $mdDialog) {
    console.log('Project Service... Hello!');
    var self = this;

    // PROJECT FUNCTIONS
    self.projects = {
        projects: []
    };

    self.newProject = {
        project_name: '',
        sqft: '',
        total_hours: 0,
    };

    self.getProjects = function () {
        $http({
            method: 'GET',
            url: '/projects'
        })
            .then(function (results) {
                self.projects.projects = results.data;
            })
            .catch(function (error) {
                console.log(`error in get request ${error}`);
            });
    };

    self.postProject = function () {
        $http({
            method: 'POST',
            url: '/projects',
            data: self.newProject
        })
            .then(function (results) {
                self.getProjects();
            })
            .catch(function (error) {
                console.log(`error in get request ${error}`);
            });
    };

    self.deleteProject = function (id) {
        $http({
            method: 'DELETE',
            url: `/projects/${id}`
        })
            .then(function (response) {
                self.getProjects();
            })
            .catch(function (error) {
                console.log(`Error with delete request, ${error}`);
            });
    };

    //ENTRY FUNCTIONS
    self.entries = {
        entries: []
    };

    self.newEntry = {
        entry_name: '',
        project_id: '',
        date: new Date(),
        start: '',
        end: '',
        hours: 0
    };


    self.getEntries = function () {
        $http({
            method: 'GET',
            url: '/entries'
        })
            .then(function (results) {
                self.entries.entries = results.data;
            })
            .catch(function (error) {
                console.log(`error making get entries ${error}`)
            })
    };


    self.postEntry = function () {     
        self.newEntry.start = document.getElementById('startTime').value;
        self.newEntry.end = document.getElementById('endTime').value;
        console.log(self.newEntry);

        $http({
            method: 'POST',
            url: '/entries',
            data: self.newEntry
        })
            .then(function (results) {
                self.getEntries();
            })
            .catch(function (error) {
                console.log(`error making post entry ${error}`)
            });
    };

    self.deleteEntry = function (id) {
        console.log('delete button click', id);
        $http({
            method: 'DELETE',
            url: `/entries/${id}`
        })
            .then(function (response) {
                self.getEntries();
            })
            .catch(function (error) {
                console.log(`Error with delete request, ${error}`);
            });
    };

}]);



// Functions Previously Used But No Longer Needed

    // self.getProjectId = function () {
    //     let selectedProject = document.getElementById('projectNameSelect');
    //     let val = selectedProject.options[selectedProject.selectedIndex].value;
    //     self.newEntry.project_id = Number(val);
    // };

    // self.getDate = function () {
    //     let dateArray = document.getElementById('entryDate').value.split('-');
    //     let formattedDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    //     self.newEntry.date = formattedDate;
    // };