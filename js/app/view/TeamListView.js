UNDirectoryApp.TeamListView = Backbone.View.extend({
	
	teamListViewTemplate: UNDirectoryApp.template("TeamListView"),
	
	initialize: function(options){
		//console.log('in the view');
	   //console.log(options);
      this.teams = options.teams;
	  this.containerId = options.containerId;
	},
	
	
	render: function(){
      var teamListItems = $(this.teamListViewTemplate(this));
      return teamListItems;
    },

	teamContainerId: function(){
	  return "TeamContainer";
	},

	teamItemDetails: function(){
      	var teamItemDetailsArray = [];
      	var self = this;
    	$.each(this.teams, function(i, team){
			var obj = {};
			obj["teamName"] = team.teamName;
			obj["teamDetailUrl"] = self.getTeamDetailUrl(team.teamId);
			teamItemDetailsArray.push(obj);
		});
		return teamItemDetailsArray;
	},

	//Todo - see if you can avoid hard coding routes here but rather calling the Router ?
	getTeamDetailUrl: function(teamId){
		//console.log("#teamDetail/"+teamId);
      return "#teamDetail/"+teamId;
	}

});