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
                    db3.find({"noc":"KEC BCT A"},function(error,data){
                            console.log(data[0].atn.length);
                            //console.log(data[0].atn[0]);
                            for(var i=1;i<=(data[0]["atn"].length-1);i++){
                                  var b={};
                                  b["x"]=i;
                                  b["value"]=data[0].atn[i-1];
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
                      date1:"Sep 4",
                      date2:"Sep 5",
                      date3:"Sep 6"
                    };
                    scope.addrow=function(){
                      scope.rowCollection.push({roll:'68001',date1:"Present",total:5});
                      var Datastore = require('nedb'),
                      db3 = new Datastore({filename: "database/attendancedb", autoload: true});
                      db3.find({"nameOfClass":currentTable},function(error,data){
                        a=data;
                        /*console.log(data);
                        a=data;*/
                          console.log(data[0].attendance.length);
                          //console.log(data[0].atn[0]);
                          for(var i=1;i<=(data[0]["attendance"].length-1);i++){
                                var b={
                                  roll:i,
                                  total:data[0].attendance[i-1]
                                }
                                scope.rowCollection.push(b);
                                console.log(scope.rowCollection)
                          }
                          scope.$apply();
                        });
                    };
                    scope.rowCollection = [
                        {roll:'68001',date1:"Present",total:5}
                    ];
                    }]);