$('input').focus(function() { $(this).attr('placeholder', ''); });

$('.icon-favorite').on('click', function(e){
  $(this).toggleClass('is-favorite');
  e.preventDefault();
});

$('.mobile-off-canvas-button').on('click', function(e) {

	var $this = $(this),
		sidebar = $('.sidebar-wrap'),
		mainNav = $('.main-nav'),
		mainNavBtn = $('#main-nav-button'),
		bodyWrap = $('.body-wrap');

	if($this.is('#main-nav-button:not(.is-active)')){
		sidebar.hide();
		mainNav.show();
	} else if($this.is('#login-button:not(.is-active)')){
		sidebar.show();
		mainNav.hide();
	}

	bodyWrap.toggleClass('is-active');
	mainNavBtn.toggleClass('is-active');

	e.preventDefault();
});