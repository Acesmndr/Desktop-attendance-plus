angular.module('myControllers',[])
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
})
.controller('classCtrl',function($scope,$location){
  message=1; 
  /*$scope.changeRoute=function(destination){
      $location.path("/"+destination);
  }*/
})
.controller('barCtrl', function($scope) {
  $scope.data = [];
  //var b={};
  for(var i=1;i<=44;i++){
  var b={};
  b["x"]=i;
  b["value"]=1;//Math.floor((Math.random() * 40) + 1);
  console.log(i);
  $scope.data.push(b);
  //console.log($scope.data);
  }
                $scope.options = {
  axes:{
     y: {type: 'linear',ticks: 10},
     x: {type: 'linear',ticks: 50}
  },
  series: [
    {
      y: "value",
      label: "Attendance of BCT A 2068",
      color: "#2ca02c",
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
    scope.table={
      date1:"Sep 4",
      date2:"Sep 5",
      date3:"Sep 6"
    };
    scope.addrow=function(){
      scope.rowCollection.push({roll:'68001',date1:"Present",total:5});

      var Datastore = require('nedb'),
      db3 = new Datastore({filename: "database/attendancedb", autoload: true});
      db3.find({"noc":"KEC BCT A"},function(error,data){
          console.log(data[0].atn.length);
          //console.log(data[0].atn[0]);
          for(var i=1;i<=(data[0]["atn"].length-1);i++){
                var b={
                  roll:i,
                  total:data[0].atn[i-1]
                }
                //console.log(i);
                scope.rowCollection.push(b);
                console.log(scope.rowCollection)
                //console.log($scope.data[i-1]);
                //console.log($scope.data);
          }
          scope.$apply();
        });
    };
    scope.rowCollection = [
        {roll:'68001',date1:"Present",total:5}
    ];
}]).controller('loginCtrl',['$scope','$location','$http',function(scope,location,http){
  scope.login=function(){
      location.path("/class");
  };
  scope.call=function(){
      http.get('http://192.168.1.101:8000/phptest/httptest?uid=hello').success(function(data){
          console.log("Hello");
          console.log(data);
      });
  };
}]);