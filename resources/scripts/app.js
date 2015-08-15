// Load native UI library
var app=angular.module('myApp',['ngRoute','n3-line-chart','myControllers'])
.config(["$routeProvider",function($routeProvider) {
  console.log($routeProvider);
  $routeProvider.when('/',{
    templateUrl:'views/table.html',
    controller:'tableCtrl'  
  }).when('/bar',{
    templateUrl:'views/bar.html',
    controller:'barCtrl'
  }).when('/table',{
    templateUrl:'views/table.html',
    controller:'tableCtrl'
  })
}])
.run(function(){
            var gui = require('nw.gui');
            var win = gui.Window.get();
            var menu = new gui.Menu({ 'type': 'menubar' });
            var item = new gui.MenuItem({ label: "Attendance",
            		click: function() {
            			menu.popup(0,0);
                  console.log("Hello");
              		},
              		key: "s",
            		enabled: "true",
              		modifiers: "ctrl-alt"
            		}); 
            menu.append(item);
            menu.append(new gui.MenuItem({ label: "Menu",
                click: function() {
                  console.log("yellow");
                  },
                  key: "t",
                enabled: "true",
                  modifiers: "ctrl-alt"
                })); 
            //menu.popup(0,0);
            //win.menu = menu;


            //document.getElementById('content').html(require('nw.gui').App.dataPath);
})
.directive("batman",function(){
  return{
    restrict:'E',
    templateUrl:'views/bar.html'
  }
});

