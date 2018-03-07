		
		//Плавный скролл по якорям
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			offset = 20,
			bl_top = $(target).offset().top - offset - 30;
			bl_top_correct = $(target).offset().top - offset - 60;
			bl_top_correct2 = $(target).offset().top - offset - 30;
		$('.nav-burger__checkbox').click();
		$('body, html').animate({scrollTop: bl_top}, 800);
		$('body, html').animate({scrollTop: bl_top_correct}, 200);
		$('body, html').animate({scrollTop: bl_top_correct2}, 300);
		

		return false;
	});
});

		//Выпадающий фиксированный header
$(document).scroll (function () {
	if ($(this).scrollTop() > $(".header").height() -10) {
		$(".header").attr("Id", "default").fadeIn('fast');
	} else {
		$(".header").attr("Id", "").fadeIn('fast')
	};
});

		//Слайдер
$('.slider').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1200,
	dots: true,
	arrows: false,
	pauseOnDotsHover: true,
	responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
		slidesToScroll: 1
      }
    }
  ]
});

		//Стилизация полосы прокрутки в header
$(".item_phone").niceScroll({
	cursorcolor:"rgba(20,20,20,0.3)",
	background:"transparent",
	cursorborder:"none"
});

		//Отправка формы на email
//$("#form").submit(function () {
	//$.ajax({
		//type: "POST",
		//url: "mail.php",
		//data: $(this).serialize()
	//}).done(function () {
		//alert("Спасибо за заявку!");
	//});
	//return false;
//});
//$(".wrap_head").on('click', function (e) {
    //var target=e.target;
	//console.log($(target).offset().top);
	
//});
$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
				$('.js-overlay-campaign').fadeIn();
				$('.js-overlay-campaign').addClass('disabled');
			setTimeout(function() {
				// Done Functions
				$('.js-overlay-campaign').fadeOut();
				th.trigger("reset");
			}, 3500);
		});
		return false;
	});

