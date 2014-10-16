  UNDirectoryApp.Router = Backbone.Router.extend({
    initialize: function(options){
		this.el = options.el;
    	this.teams = options.teams;
    },
    routes:{
      //router will match the REST url and call the approriate action,
      //in this case "" stands for the default action that gets triggered.
    	"": "index",
		"TeamPage": "index",
      "teamDetail/:teamId": "showTeamDetails",
	  "teamMemberDetail/:teamId/:memId": "showMemberDetail"
    },
    index: function(){
		
     
      var teamListView = new UNDirectoryApp.TeamListView({teams: this.teams});
      var teamListPage = teamListView.render();

      //Start from clean slate and re render the details.
	  	this.el.empty();
      	teamListPage.appendTo( this.el );
    	  $("#" + teamListView.teamContainerId()).listview();
		 
    	  $.mobile.changePage($("#TeamPage"));
    },
	
	showTeamDetails : function(id){
		console.log('showing details of team : ' + id);
		// fetch array based on teamId from this.teams and store it
		// in members object and then pass this object to thse rows.
		var members = this.teams[id].teamMembers;
		var tName = this.teams[id].teamName;
		var teamMembersListView = new UNDirectoryApp.TeamMembersListView({teamId: id, teamName: tName, teamMembers: members});
		var teamMembersListPage = teamMembersListView.render();
		
		 //this.el.empty();
      	teamMembersListPage.appendTo( $.mobile.pageContainer );
      	  //console.log(this.el);
    	  $("#" + teamMembersListView.teamMembersContainerId()).listview();
		 //console.log( $("#" + teamMembersListView.teamMembersContainerId()).listview());
    	  $.mobile.changePage(teamMembersListPage);
		
	},
	
	showMemberDetail : function(teamId, memId){
		console.log('show member detail');
		var mem = this.teams[teamId].teamMembers[memId];
		
		var memberDetailView = new UNDirectoryApp.MemberDetailView({teamId: teamId, member: mem});
		var memberDetailPage = memberDetailView.render();
		
		memberDetailPage.appendTo( $.mobile.pageContainer );
      	  //console.log(this.el);
    	  $("#" + memberDetailView.memberContainerId()).listview();
		 //console.log( $("#" + teamMembersListView.teamMembersContainerId()).listview());
    	  $.mobile.changePage(memberDetailPage);
			
	}


  });