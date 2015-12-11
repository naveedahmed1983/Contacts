(function(){
    var UNDirectoryApp = {};
  window.UNDirectoryApp = UNDirectoryApp;

  //given the name of the template, it returns the compiled javascript of that template.
  UNDirectoryApp.template = function(name) {
	//console.log('in temp function with name: ' + name +'-template');  
	var val =   $('#'+name+'-template').html();
	//console.log(val);
    return Mustache.compile(val);
  };

  //This is the entry point to our client side application
  UNDirectoryApp.boot = function(container){
	
    //Todo : Use the input parameter #Movies container in here.
  	//Get the json from the server 
	
	
    $.getJSON("http://www.itsandpm.com/teams.json", function(teamDetails){

  		container = $(container);
		var router = new UNDirectoryApp.Router({el: container, teams: teamDetails});
    	Backbone.history.start();
    });
	
  }

})()