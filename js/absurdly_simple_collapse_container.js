function asc_container_open_all(element, action){
    if (action == 'open'){
        $(element).slideDown("fast");
    } else {
        $(element).slideUp("fast");
    }
    if ($(element).children().length > 0 ) {
        $(element).children("div.asc_container").each(function(index, iteration_element) {
            asc_container_open_all(iteration_element, action);
        });
    };
};

$(document).ready(function() {
	$("a.asc_button_toggle").click(function() {
		my_id = $(this).attr('id');
		css_selector = "div#"+my_id+".asc_container";
		$(css_selector).slideToggle("fast", function() {});
	});
	$("a.asc_button_open_all").click(function() {
            my_id = $(this).attr('id');
            css_selector = "div#"+my_id+".asc_container";
            asc_container_open_all($(css_selector), 'open');
	});
	$("a.asc_button_close_all").click(function() {
            my_id = $(this).attr('id');
            css_selector = "div#"+my_id+".asc_container";
            asc_container_open_all($(css_selector), 'close');
	});
});