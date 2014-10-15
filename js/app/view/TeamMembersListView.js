UNDirectoryApp.TeamMembersListView = Backbone.View.extend({
	
	teamListMembersViewTemplate: UNDirectoryApp.template("TeamMemberListView"),	
	
	initialize: function(options){
		this.teamId = options.teamId;
		this.teamMembers = options.teamMembers;
	  	this.containerId = options.containerId;
	},
	
	render: function(){
      var teamMembersListItems = $(this.teamListMembersViewTemplate(this));
	  //console.log(teamMembersListItems);
      return teamMembersListItems;
    },
	
	teamMembersContainerId: function(){
	  return "TeamMembersContainer";
	},
	
	teamMembersItemDetails: function(){
      	var teamMembersItemDetailsArray = [];
      	var self = this;
    	$.each(this.teamMembers, function(i, teamMember){
			var obj = {};
			obj["img"] = teamMember.img;
			obj["name"] =  teamMember.name;
			obj["agency"] =  teamMember.agency;
			obj["title"] =  teamMember.designation;
			
			obj["teamMemberDetailUrl"] = self.getTeamMemberDetailUrl(teamMember.id);
			teamMembersItemDetailsArray.push(obj);
		});
		console.log(teamMembersItemDetailsArray)
		return teamMembersItemDetailsArray;
	},
	
	getTeamMemberDetailUrl: function(id){
		//console.log("#teamMemberDetail/"+this.teamId+"/"+id);
      return "#teamMemberDetail/"+this.teamId+"/"+id;
	}

});