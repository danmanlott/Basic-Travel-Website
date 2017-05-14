/*
Dan Lott
JavaScript file for project 8
CIS 4004

*/



var d = new Date();//we have a new var that we populate with the current time, date, yada yada
document.getElementById("currTime").innerHTML = d;//print the full date to the <p> tag named id "demo"


$(document).ready(function() {//be sure to be ready
$("tr").not(':first').hover( //for table rows, not the first row, and when the cursor hovers over it
	function (){ //color it
		$(this).css("background","yellow"); //highlight yellow 
		$(this).css("color","red");// red text
	},
	function (){ //de-highlight when cursor leaves the row
		$(this).css("background","");//set background back to default (our styling)
		$(this).css("color","");//set text color back to default (our styling)
	}
)});



