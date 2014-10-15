var info = "";
 $.getJSON('unrco.json', function(data) {
	info=data.emp;
 });
//assuming this comes from an ajax call
 

//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pageinit", "#unrcoStaffPage", function () {


    //set up string for adding <li/>
    var li = "";
    //container for $li to be added
    $.each(info, function (i, name) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        li = '<li><a href="#" id="' + i + '" class="info-go"  >' + name.name + '</a></li>';
    });
    //append list to ul
    $("#prof-list").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();
            //store the information in the next page's data
            $("#unrcoStaffPagedetailsPage").data("info", info[this.id]);
            //change the page # to second page. 
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            $.mobile.changePage("#unrcoStaffPagedetailsPage");
        });

        //refresh list to enhance its styling.
        //$(this).listview('refresh');
		//$(this).listview().listview('refresh');
    });
	
	
});

//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#unrcoStaffPagedetailsPage", function () {
    //get from data - you put this here when the "a" wa clicked in the previous page
    var info = $(this).data("info");
    //string to put HTML in
    var info_view = "";
    //use for..in to iterate through object
    for (var key in info) {
        //Im using grid layout here.
        //use any kind of layout you want.
        //key is the key of the property in the object 
        //if obj = {name: 'k'}
        //key = name, value = k
        //info_view += '<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar field" style="font-weight : bold; text-align: left;">' + key + '</div></div><div class="ui-block-b"><div class="ui-bar value" style="width : 75%">' + info[key] + '</div></div></div>';
		info_view = '<a href="tel: ' + info['phone'] + '" class="ui-btn ui-icon-phone ui-btn-icon-left ui-mini">'+ info['phone'] + '</a>'
    }
    //add this to html
	$(this).find("[id=nameofemplyee]").html(info['name']);
    $(this).find("[data-role=content]").html(info_view);
});

