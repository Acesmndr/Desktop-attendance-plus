angular.module('classControllers',[])
.controller('classCtrl',function($scope,$location){
  message=1; 
  /*$scope.changeRoute=function(destination){
      $location.path("/"+destination);
  }*/
}).controller('formCtrl',['$scope','$http',function(scope,http){

	var Datastore = require('nedb'),
  db5 = new Datastore({filename: "database/attendancedb", autoload: true});
	//scope.class={};
  this.addClass=function(){
    console.log("class added");
    http.get('http://192.168.1.101:8000/phptest/httptest?uid=hello').success(function(data){
          var a={};
            a.noc="KEC BCT A";
            a.rs=68001;
            a.nos=44;
            a.atn=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            a.timestamp=76582934234;
            //a.data=[];
            //a.data.push("{'a':'b','c':'d'}");
          //var doc={ "classname":"aces","classid":"asdfasdf","rollstart":"asdfsdfss","totalno":"sdfsdfsdfsd"};
          db5.insert(a,function(){
            console.log("Done");
          });
        });
   
  };
  
}]);