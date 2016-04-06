( function( $ ) {
$( document ).ready(function() {

// COLORBOX
  $(".photo").colorbox({rel:'photo', fixed: "true", transition:"fade", height: "100%", maxWidth: "100%", opacity: "0.7", returnFocus: "false"});

  $(".callbacks").colorbox({
    onOpen:function(){ alert('onOpen: colorbox is about to open'); },
    onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
    onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
    onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
    onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
  });

// FITTEXT
  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

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
