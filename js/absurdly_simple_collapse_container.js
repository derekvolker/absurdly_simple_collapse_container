$(document).ready(function() {
	$(".absurdly_simple_collapse_container_header").click(function() {
		my_id = $(this).attr('id');
		css_selector = "div#"+my_id+".absurdly_simple_collapse_container";
		$(css_selector).slideToggle("fast", function() {});
	});
});