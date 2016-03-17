( function( $ ) {
$( document ).ready(function() {

// FLEXTEXT
jQuery(".flextext").fitText();

// HORIZONTAL MENU
$('#mainSection li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(250);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(250);
			element.siblings('li').children('ul').slideUp(250);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(250);
		}
	});

});
} )( jQuery );
