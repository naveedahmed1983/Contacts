$(document).ready(function(){
	
	$("#btnlogin").hide();
	
	$('#pinCode').keypress(function (e) {
		$("#err").text("");
 		var key = e.which;
 		if(key == 13)  // the enter key code
  		{
    		$("#btnCheck").click();
    		return false;  
  		}
	});
	
	$("#btnCheck").click(function(){
		//console.log("it worked");
		//console.log($("#pinCode").val());
		
		var password = "un2014";
    		if($("#pinCode").val() !== password) {
				$("#pinCode").val("");
        		$("#err").text("Access Denied! Please type the correct access code or contact Administrator for further assistance");
    		}
    		else {
				
				//$("#btnlogin").click();
				console.log('correct code');
				UNDirectoryApp.boot($('#TeamPageContents'));
				  
    		}
	});
	
	
	
	
$("#pinCode").click(function(){
	$("#err").text("");
	});
			
});