$(document).ready(function(){
	$('#backToTop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#backToTop').show();
		} else {
			$('#backToTop').hide();
		}
	})
	
	$('#backToTop').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	})
})