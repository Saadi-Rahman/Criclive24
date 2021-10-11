/* js for search-box */

$(document).ready(function(){
		$(".btn").click(function(){
			$(".input").toggleClass("active").focus().val("");
			$(this).toggleClass("animate");
		});
	});