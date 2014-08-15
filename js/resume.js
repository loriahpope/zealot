window.onload = function(){
	var p = Raphael(document.getElementById("raphaelSkills"), "90%", "90%");

	var HTML = p.rect(50, 25, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 380,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 36, "HTML");
		

	var CSS = p.rect(50, 50, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 380,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 61, "CSS");
		

	var SASS = p.rect(50, 75, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 360,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 86, "SASS");
		

	var Javascript = p.rect(50, 100, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 340,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 110, "JScript");
			
	var JQuery = p.rect(50, 125, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 320,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 136, "JQuery");
		

	var Java = p.rect(50, 150, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 340,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 160, "Java");
			
	var C = p.rect(50, 175, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 280,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 187, "C");
		

	var Photoshop = p.rect(50, 200, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 340,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 210, "PShop");
		

	var Node = p.rect(50, 225, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 160,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 237, "Node");
		

	var Grunt = p.rect(50, 250, 250, 20)
		.attr({
			"fill": "#ccc",
			"stroke": "none",
			"width": 5
		}).animate({
			"width": 160,
			"text": "HTML",
			"fill": "#38b48b"
		}, 3000, "bounce");
		p.text(30, 260, "Grunt");
}




$('.right').on('click', function(e) {
	e.preventDefault();

	$('.script div:visible').addClass('show');

	var complete=false;

	if($('.script .display1').hasClass('show')&&complete==false){
		$('.script .display1').removeClass('show');
		$('.script .display1').addClass('hide');
		$('.button1').css('background-color', '');
		$('.script .display2').removeClass('hide');
		$('.script .display2').addClass('show');
		$('.button2').css('background-color', '#38b48b');
		complete=true;
	}

	if($('.script .display2').hasClass('show')&&complete==false){
		$('.script .display2').removeClass('show');
		$('.script .display2').addClass('hide');
		$('.button2').css('background-color', '');
		$('.script .display3').removeClass('hide');
		$('.script .display3').addClass('show');
		$('.button3').css('background-color', '#38b48b');
		complete=true;
	}

	if($('.script .display3').hasClass('show')&&complete==false){
		$('.script .display3').removeClass('show');
		$('.script .display3').addClass('hide');
		$('.button3').css('background-color', '');
		$('.script .display1').removeClass('hide');
		$('.script .display1').addClass('show');
		$('.button1').css('background-color', '#38b48b');
		complete=true;
	}
});

$('.left').on('click', function(e) {
	e.preventDefault();

	$('.script div:visible').addClass('show');

	var complete=false;

	if($('.script .display3').hasClass('show')&&complete==false){
		$('.script .display3').removeClass('show');
		$('.script .display3').addClass('hide');
		$('.button3').css('background-color', '');
		$('.script .display2').removeClass('hide');
		$('.script .display2').addClass('show');
		$('.button2').css('background-color', '#38b48b');
		complete=true;
	}

	if($('.script .display2').hasClass('show')&&complete==false){
		$('.script .display2').removeClass('show');
		$('.script .display2').addClass('hide');
		$('.button2').css('background-color', '');
		$('.script .display1').removeClass('hide');
		$('.script .display1').addClass('show');
		$('.button1').css('background-color', '#38b48b');
		complete=true;
	}

	if($('.script .display1').hasClass('show')&&complete==false){
		$('.script .display1').removeClass('show');
		$('.script .display1').addClass('hide');
		$('.button1').css('background-color', '');
		$('.script .display3').removeClass('hide');
		$('.script .display3').addClass('show');
		$('.button3').css('background-color', '#38b48b');
		complete=true;
	}
});

$('.xpLeft').on('click', function(e) {
	e.preventDefault();
	console.log("yo");
	$('.box2 section:visible').addClass('show');

	var complete=false;

	if($('.box2 #experience').hasClass('show')&&complete==false){
		$('.box2 #experience').removeClass('show');
		$('.box2 #experience').addClass('hide');
		$('.xpButton1').css('background-color', '');
		$('.box2 #leadership').removeClass('hide');
		$('.box2 #leadership').addClass('show');
		$('.xpButton2').css('background-color', '#38b48b');
		complete=true;
	}

	if($('.box2 #leadership').hasClass('show')&&complete==false){
		$('.box2 #leadership').removeClass('show');
		$('.box2 #leadership').addClass('hide');
		$('.xpButton2').css('background-color', '');
		$('.box2 #experience').removeClass('hide');
		$('.box2 #experience').addClass('show');
		$('.xpButton1').css('background-color', '#38b48b');
		complete=true;
	}
});

$('.xpRight').on('click', function(e) {
	e.preventDefault();
	console.log("yo");
	$('.box2 section:visible').addClass('show');

	var complete=false;

	if($('.box2 #experience').hasClass('show')&&complete==false){
		$('.box2 #experience').removeClass('show');
		$('.box2 #experience').addClass('hide');
		$('.xpButton1').css('background-color', '');
		$('.box2 #leadership').removeClass('hide');
		$('.box2 #leadership').addClass('show');
		$('.xpButton2').css('background-color', '#38b48b');
		complete=true;
	}

	if($('.box2 #leadership').hasClass('show')&&complete==false){
		$('.box2 #leadership').removeClass('show');
		$('.box2 #leadership').addClass('hide');
		$('.xpButton2').css('background-color', '');
		$('.box2 #experience').removeClass('hide');
		$('.box2 #experience').addClass('show');
		$('.xpButton1').css('background-color', '#38b48b');
		complete=true;
	}
});