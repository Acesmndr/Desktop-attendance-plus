// Load native UI library
(function(){
var app=angular.module('myApp',['ngRoute']);
var stories=[{
  name:'KEC BEX C 2069',
  description:'It is the class that bla bla bla'
},{
  name:'KEC BEL A 2070',
  description:'Electrical',
  }];
var Datastore = require('nedb')
  , db = new Datastore();
  var doc={ name: 'KEC BCT A 2068',description: 'This is the first class',set:1};
/*var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };*/

db.insert(doc, function () { });
doc={ name: 'KEC BCT B 2068',description: 'This is the second class',set:1};
db.insert(doc, function (err, newDoc) {});
doc={ name: 'KEC ARCH C 2069',description: 'This is the third class',set:1};
db.insert(doc, function () {});
db.find({ set: 1 }, function (err, docs) {
  for(i in docs){
    console.log(docs[i]);
    stories.push({'name':docs[i].name,'description':docs[i].description});
  }
  });
app.controller("storyController",function(){
  this.contentStories=stories;

});
app.controller("InsetController",function($scope){
  $scope.inset={};
  $scope.addClass=function(inset){
    stories.push({name:inset.class,description:inset.subject});
    $scope.inset={};
  }

});

var gui = require('nw.gui');
var win = gui.Window.get();
var menu = new gui.Menu({ 'type': 'menubar' });
var item = new gui.MenuItem({ label: "Attendance",
		click: function() {
			console.log("yellow");
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
})();
