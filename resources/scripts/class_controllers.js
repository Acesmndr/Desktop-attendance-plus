angular.module('classControllers',[])
.controller('classCtrl',['$scope','$location',function(scope,location){
                      message=1; 
                      scope.classlist=[];
                      var Datastore = require('nedb'),
                      db5 = new Datastore({filename: "database/tabledb", autoload: true});
                      db5.find({},function(error,data){
                          for(i in data){
                              scope.classlist.push(data[i]);
                          }
                          a=scope.classlist;
                          scope.$apply();
                       });
                       scope.tableClick=function(name){
                          localStorage.setItem('currentTable',name);
                          location.path('/table');
                       }

                  }])

.controller('loginCtrl',['$scope','$location','$http',function(scope,location,http){
                      if(localStorage['uid']){
                          location.path('/class');
                          //scope.$apply();
                      }
                     /*var Datastore = require('nedb'),
                        db2 = new Datastore({filename: "database/tabledb", autoload: true});
                        db2.find({type:"userid"},function(error,data){
                            if(data[0]!=undefined){
                                location.path('/class');
                                scope.$apply();
                            }
                            console.log("Hasdfsdf");
                        });*/
                    scope.login=function(){
                        localStorage["uid"]=scope.userid;
                        localStorage['timestamp']=1;
                        location.path('/class');
                       //http.get('http://192.168.1.101:8000/webresponse?email='+scope.userid+'&timestamp='+scope.userpwd).success(function(data){
                        //console.log(data);
                            /*if(data[0]=="success"){
                                var db={
                                  userid:data[0]
                                }
                                db2.insert()
                                location.path('/class');
                            }else{

                            }*/
                        //});
                    };
                    scope.call=function(){
                        http.get('http://192.168.1.101:8000/phptest/httptest?uid=hello').success(function(data){
                            console.log("Hello");
                            console.log(data);
                        });
                    };
                    }])
.controller('syncCtrl',['$scope','$location','$http',function(scope,location,http){
                    message=0;
                    var Datastore = require('nedb'),
                    db3 = new Datastore({filename: "database/attendancedb", autoload: true}),
                    db4 = new Datastore({filename:"database/tabledb", autoload:true});
                    scope.sync=function(){
                       http.get('http://192.168.1.101:8000/webresponse?email='+localStorage.getItem('uid')+'&timestamp='+localStorage.getItem('timestamp')).success(function(data){
                        console.log(data);
                        //db3.remove({ }, { multi: true }, function (err, numRemoved) {});
                        if(localStorage['timestamp']==1){
                          db3.remove({ }, { multi: true }, function (err, numRemoved) {});
                          db3.persistence.compactDatafile();
                        }
                        db4.remove({ }, { multi: true }, function (err, numRemoved) {});
                        db4.persistence.compactDatafile();
                        //db5 .remove({ }, { multi: true }, function (err, numRemoved) {});
                         db3.insert(data.data,function(err,docs){});
                         db4.insert(data.classData,function(err,docs){});
                          localStorage.setItem("timestamp",data.timestamp);
                       });
                    }
                    }])  
.controller('viewCtrl',function($scope,$location){
                      $scope.menuSwitch=function(){
                          if(message==0)
                            return true;
                          else 
                            return false;
                      }
                      $scope.changeRoute=function(destination){
                          $location.path("/"+destination);
                      }
});
/*
.controller('formCtrl',['$scope','$http',function(scope,http){
            var Datastore = require('nedb'),
            db5 = new Datastore({filename: "database/attendancedb", autoload: true});
            //scope.class={};
            this.addClass=function(){
                console.log("class added");
                http.post('http://192.168.1.101:8000/phptest/httptest').success(function(data){
                      var a={};
                      a.noc="KEC BCT A";
                      a.rs=68002;
                      a.nos=44;
                      a.atn=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      a.timestamp=76582934234;
                      db5.insert(a,function(){
                            console.log("Done");
                      });
                });
            };
            }])*/
