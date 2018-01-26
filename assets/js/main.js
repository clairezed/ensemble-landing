


(function($) {
	$("[data-is-form='ajax']").submit(function(e) {
		console.log("submission ! ");
	  e.preventDefault();
	  var $form = $(this);
	  $.post($form.attr("action"), $form.serialize()).then(function() {
			console.log("submission Received ! ");
			$("[data-is-result-form='ajax']").slideDown()
	  });
	});

})(jQuery);
