// Navbar background after scroll
$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('nav').addClass('nav-bg-color');
	} else {
		$('nav').removeClass('nav-bg-color');
	}
});

// Scroll Reveals
window.sr = ScrollReveal();
sr.reveal('.showcase-left', {
  duration: 3000,
  origin:'left',
  distance:'300px'
});

sr.reveal('.showcase-right', {
  duration: 3000,
  origin:'right',
  distance:'300px'
});