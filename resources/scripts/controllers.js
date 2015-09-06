angular.module('myControllers',[])
.controller('barCtrl', function($scope) {
                    $scope.data = [];
                    $scope.options = {
                        axes:{
                           y: {type: 'linear',ticks: 10},
                           x: {type: 'linear',ticks: 50}
                        },
                        series: [
                          {
                            y: "value",
                            label: "Attendance of BCT A 2068",
                            color: "#0000ff",
                            type: "column"
                          }
                            ]
                    };
                    var Datastore = require('nedb'),
                    db3 = new Datastore({filename: "database/attendancedb", autoload: true});
                    db3.find({"nameOfClass":localStorage.getItem("currentTable")},function(error,data){
                            var rollStart=parseInt(localStorage.getItem("rollStart"))%100;
                            console.log(data[0].attendance.length);
                            //console.log(data[0].atn[0]);
                            for(var i=1;i<=(data[0]["attendance"].length-1);i++){
                                  var b={};
                                  b["x"]=i+rollStart;
                                  b["value"]=data[0].attendance[i-1];
                                  //console.log(i);
                                  $scope.data[i-1]=b;
                                  console.log($scope.data[i-1]);
                                  //console.log($scope.data);
                            }
                            $scope.$apply();
                    console.log($scope.data);
                   });
                  })
.controller('tableCtrl', ['$scope', function (scope) {
                      var currentTable=localStorage.getItem('currentTable');
                      scope.table={
                      date0:"Sep 6",
                      date1:"Sep 5",
                      date2:"Sep 4"
                    };
                    scope.addrow=function(){
                      var Datastore = require('nedb'),
                      db3 = new Datastore({filename: "database/attendancedb", autoload: true});
                      db3.find({"nameOfClass":currentTable},function(error,data){
                      a=data;
                      console.log(data.length);
                       var rollStart=parseInt(localStorage.getItem("rollStart"));
                          //console.log(data[0].atn[0]);
                          for(var i=1;i<=(data[0]["attendance"].length-1);i++){
                                var b={};
                                b.roll=i+rollStart;
                                for(j=0;j<data.length;j++){
                                  b["date"+j]=(data[j].attendance[i-1]==0)?"Present":"Absent";
                                }
                               scope.rowCollection.push(b);
                                console.log(scope.rowCollection);
                          }
                        scope.$apply();
                        });
                    };
                    scope.rowCollection = [];
                    }]);