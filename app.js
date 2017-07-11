var app = angular.module("RacingApp", []);
var data;
app.controller("racerctrl", function($scope,$http){		
    $http.get("http://ergast.com/api/f1/2017/driverStandings.json").then(function(response)
            {
                $scope.x = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            });
        });