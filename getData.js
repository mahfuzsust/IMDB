function getData(){
	var query = $("#query").val();
	var apiurl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zs46b23pwz8hvh9p4hf8jpyt&q=" + query + "&page_limit=5&page=1";
	
	
	
	
	var request = $.ajax({
		type : "GET",
		dataType : "jsonp",
		url : apiurl,
		success: function(data){
			$( "#searchResult" ).show("");
			$( "#row1title" ).text( data.movies[0].title );
			$( "#row2title" ).text( data.movies[1].title );
			$( "#row3title" ).text( data.movies[2].title );
			$( "#row4title" ).text( data.movies[3].title );
			$( "#row5title" ).text( data.movies[4].title );
			$( "#row1actor" ).text( data.movies[0].abridged_cast[0].name + " , " + data.movies[0].abridged_cast[1].name + " , " + data.movies[0].abridged_cast[2].name + " , " + data.movies[0].abridged_cast[3].name + " , " + data.movies[0].abridged_cast[4].name );
			$( "#row2actor" ).text( data.movies[1].abridged_cast[0].name + " , " + data.movies[1].abridged_cast[1].name + " , " + data.movies[1].abridged_cast[2].name + " , " + data.movies[1].abridged_cast[3].name + " , " + data.movies[1].abridged_cast[4].name );
			$( "#row3actor" ).text( data.movies[2].abridged_cast[0].name + " , " + data.movies[2].abridged_cast[1].name + " , " + data.movies[2].abridged_cast[2].name + " , " + data.movies[2].abridged_cast[3].name + " , " + data.movies[2].abridged_cast[4].name );
			$( "#row4actor" ).text( data.movies[3].abridged_cast[0].name + " , " + data.movies[3].abridged_cast[1].name + " , " + data.movies[3].abridged_cast[2].name + " , " + data.movies[3].abridged_cast[3].name + " , " + data.movies[3].abridged_cast[4].name );
			$( "#row5actor" ).text( data.movies[4].abridged_cast[0].name + " , " + data.movies[4].abridged_cast[1].name + " , " + data.movies[4].abridged_cast[2].name + " , " + data.movies[4].abridged_cast[3].name + " , " + data.movies[4].abridged_cast[4].name );
		}
	});
}