// Load native UI library
var a;
var app=angular.module('myApp',['ngRoute','n3-line-chart','myControllers','classControllers'])
.config(["$routeProvider",function(routeProvider) {
  //console.log(routeProvider);
  routeProvider.when('/',{
    templateUrl:'views/login.html',
    controller:'loginCtrl'  
  }).when('/class:message',{
    templateUrl:'views/classList.html',
    controller:'classCtrl'
  }).when('/bar',{
    templateUrl:'views/bar.html',
    controller:'barCtrl'
  }).when('/table',{
    templateUrl:'views/table.html',
    controller:'tableCtrl'
  }).when('/sync',{
    templateUrl:'views/sync.html',
    controller:'syncCtrl'
  }).otherwise({
    templateUrl:'views/login.html',
    controller:'loginCtrl'
  });
}])
.run(function(){
            message=0;
            a="asdfasdf";
            var Datastore = require('nedb')
            , db = new Datastore({ filename: 'aces', autoload: true});
            // var doc={ name: 'KEC BCT A 2068',description: 'This is the first class',set:1};
            //db.insert(doc, function () { });
            /*db.find({ datatype:'userid' }, function (err, docs) {
                    a=docs[0]['userid']
            });*/
            /*function saveFile(name,data) {
                var chooser = document.querySelector(name);
                chooser.addEventListener("change", function(evt) {
                console.log(this.value); // get your file name
                var fs = require('fs');// save it now
                    fs.writeFile(this.value, data, function(err) {
                        if(err) {
                           alert("error"+err);
                        }
                    });
                }, false);
            chooser.click();  
            }*/
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


