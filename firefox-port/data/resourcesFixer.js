alert("resources");
var table = $('table.#Resources');
console.log(table);
var as = table.find('td > a');

for(var i = 0; i < as.length; i++){
	var a = $(as[i]);
	var oldClick = a.attr('onclick');
	a.attr('onclick', '');
	a.data('oldClick', oldClick);
	a.unbind('click');
	a.click(function(e){clickedResource(e);});


	var s1Start = oldClick.indexOf("'");
	var s1End = oldClick.indexOf("'",s1Start + 1);
	var s1 = oldClick.substring(s1Start + 2, s1End);
	

	var checkBox = a.parent().prev().find('input');
	var RID = checkBox.attr('name').substring(2).replace("_", "-").replace("_", "-").replace("_", "-").replace("_", "-");

	a.attr("href", "http://cecil.auckland.ac.nz/resources/" + RID + window.location.search + "&FID=" + s1);

}

function clickedResource(e){
	
	if(e.which == 1){
		var a = $(e.target);

		var oldClick = a.data('oldClick');
		var s1Start = oldClick.indexOf("'");
		var s1End = oldClick.indexOf("'", s1Start + 1);
		var s2Start = oldClick.indexOf("'", s1End + 1);
		var s2End = oldClick.indexOf("'", s2Start + 1);
		var s1 = oldClick.substring(s1Start + 1, s1End);
		var s2 = oldClick.substring(s2Start + 1, s2End);
		
	
		console.log("loading the thing in frame");
		window.parent.parent.mainmenu.selectNode(s1, s2);
		e.preventDefault();
	}
}
