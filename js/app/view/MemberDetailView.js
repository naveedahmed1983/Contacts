UNDirectoryApp.MemberDetailView = Backbone.View.extend({

	membersViewTemplate: UNDirectoryApp.template("MemberDetailView"),
	
	initialize: function(options){
		this.teamId = options.teamId;
		this.member = options.member;
	  	this.containerId = options.containerId;
	},	
	

	render: function(){
      var memberListItems = $(this.membersViewTemplate(this));
      return memberListItems;
    },
	
	memberContainerId: function(){
	  return "MemberContainer";
	},
	
	memberItemDetails: function(){
      	//var memberItemDetailsArray = [];
      	//var self = this;
    	//$.each(this.member, function(i, mem){
			var obj = {};
			obj["img"] = this.member.img;
			obj["name"] = this.member.name;
			obj["agency"] = this.member.agency;
			obj["title"] = this.member.designation;
			
			if (this.member.office)
				obj["office"] = this.member.office;
			else
				obj["office"] = false;
			
			if (this.member.cell)
				obj["cell"] = this.member.cell;
			else
				obj["cell"] = false;
			
			if (this.member.email)
				obj["email"] = this.member.email;
			else
				obj["email"] = false;
				
			obj["backURL"] = this.respectiveTeamURL(this.member.memId);
			
			//memberItemDetailsArray.push(obj);
		//});
		console.log('member detail')
		console.log(obj);
		return obj;
	},
	
	respectiveTeamURL : function(memId){
		return "#teamDetail/"+this.teamId
	}
	
	
});