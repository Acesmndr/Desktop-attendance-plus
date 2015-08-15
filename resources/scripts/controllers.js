angular.module('myControllers',[])
.controller('viewController',function($scope,$location){
  $scope.changeRoute=function(destination){
      $location.path("/"+destination);
  }
})
.controller('barCtrl', function($scope) {
    $scope.data = [
];
for(var i=1;i<=44;i++){
  var b={};
  b["x"]=i;
  b["value"]=Math.floor((Math.random() * 40) + 1);
  console.log(i);
  $scope.data.push(b);
  console.log($scope.data);
}
 $scope.options = {
  axes:{
  	 y: {type: 'linear',ticks: 10},
  	 x: {type: 'linear',ticks: 5}
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
})
.controller('tableCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Bruce', lastName: 'Wayne', birthDate: new Date('1987-05-21'), balance: 102},
        {firstName: 'Diana', lastName: 'Prince', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'wonderwoman@gmail.com'},
        {firstName: 'Clark', lastName: 'Kent', birthDate: new Date('1955-08-27'), balance: 42343, email: 'Superman@gmail.com'}
    ];
}]);