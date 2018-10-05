$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<img src="' + val.image +'" alt="'+ val.name +'" />';
				output += '<h1>'+ val.shortname +'</h1>';	
			    output += '<center><a href="'+ val.website +'" target="_blank"> Visit Website</a></center>';
				output += '<center><p>'+ val.bio +'</p></center>';	
				output += '<center>'+ val.star +'</center>';	
				output += '<center><h2>' + val.name + '</h2></center>';	
			    output += '<center><a href="'+ val.github +'" target="_blank"> Open Github links</a></center>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});