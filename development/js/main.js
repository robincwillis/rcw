var app = (function(){


});

var oAnimating = false;
var uAnimating = false;
var bAnimating = false;
var animLoaded = false;
var branchAnim =  '';
var uiAnim =  '';
var orbitAnim =  '';

//---------------------------------------------------------------

var windowHeight = $(window).height();
var offset;
var yOffset = 0;


var speed = 2;
var scrollEnd = 100;
var o = 1;
var o2 = 1;
var $parallaxText = $('.splash .content');

//---------------------------------------------------------------

setAnimationElements = function(){

	branchAnim +='<div  class="branch-anim">'
	branchAnim +=   '<div class="b-center b-animate">'
	branchAnim +=       '<div class="branch branch-1 b-animate">'
	branchAnim +=           '<div class="b-node b-node-1 b-animate"></div>'
	branchAnim +=       '</div>'
	branchAnim +=       '<div class="branch branch-2 b-animate"><div class="b-node b-node-2 b-animate"></div></div>'
	branchAnim +=       '<div class="branch branch-3 b-animate"><div class="b-node b-node-3 b-animate"></div></div>'
	branchAnim +=   '</div>'
	branchAnim +='</div>'


	uiAnim +='<div class="ui-anim">'
	uiAnim +=   '<div class="frame u-animate">'
	uiAnim +=    '<div class="screen u-animate">'
	uiAnim +=        '<div class="row1">'
	uiAnim +=      '<div class="line"></div>'
	uiAnim +=                '<div class="line"></div>'
	uiAnim +=                '<div class="line"></div>'
	uiAnim +=       ' </div>'
	uiAnim +=        '<div class="row2">'
	uiAnim +=            '<div class="col1 u-animate">'
	uiAnim +=                '<div class="box"></div>'
	uiAnim +=            '</div>'
	uiAnim +=            '<div class="col2 u-animate">'
	uiAnim +=               ' <div class="line"></div>'
	uiAnim +=                '<div class="line"></div>'
	uiAnim +=                '<div class="line"></div>'
	uiAnim +=                '<div class="line"></div>'
	uiAnim +=                '<div class="line"></div>'
	uiAnim +=            '</div>'
	uiAnim +=       '</div>'
	uiAnim +=    '</div>'
	uiAnim +=   '</div>'
	uiAnim +='</div>'


	orbitAnim += '<div class="orbit-anim o-animate">'
	orbitAnim +=      '<div class="o-center o-animate"></div>'
	orbitAnim +=          '<div class="ring ring-1 o-animate">'
	orbitAnim +=      '<div class="o-node o-node-1 o-animate"></div>'
	orbitAnim +=     '</div>'
	orbitAnim +=         '<div class="ring ring-2 o-animate">'
	orbitAnim +=      '<div class="o-node o-node-2 o-animate"></div>'
	orbitAnim +=     '</div>'
	orbitAnim +=          '<div class="ring ring-3 o-animate">'
	orbitAnim +=      '<div class="o-node o-node-3 o-animate"></div>'
	orbitAnim +=      '</div>'
	orbitAnim +=  '</div>'

};

bindAnimations = function(){
	$('#anim-1').bind('webkitAnimationEnd', function(){
		bAnimating = false;
	});

	$("#anim-1").on('mouseenter',function() {
		kickBranch($(this).children('.branch-anim'));
	});

	$('#anim-2').bind('webkitAnimationEnd', function(){
		uAnimating = false;
	});

	$("#anim-2").on('mouseenter',function() {
		kickUI($(this).children('.ui-anim'));
	});

	$('#anim-3').bind('webkitAnimationEnd', function(){
		oAnimating = false;
	});

	$("#anim-3").on('mouseenter',function() {
		kickOrbit($(this).children('.orbit-anim'));
	});
};

kickUI = function(el){
	if(!uAnimating){
		console.log("this is");
		 //var el     = $(this),
		 var newone = el.clone(true);
			el.before(newone);

	 $("." + el.attr("class") + ":last").remove();
	 uAnimating = true;
	 $('.screen').bind('webkitAnimationEnd', function(){
		uAnimating = false;
		});

	}
};

kickBranch = function(el){
	if(!bAnimating){
		console.log("this is");
		 //var el     = $(this),
		 var newone = el.clone(true);
			el.before(newone);

	 $("." + el.attr("class") + ":last").remove();
	 bAnimating = true;
	 $('.b-center').bind('webkitAnimationEnd', function(){
		bAnimating = false;
		});
	}
};

kickOrbit = function(el){
	if(!oAnimating){
		console.log("this is" + el);
		// var el     = $(this),
		var newone = el.clone(true);
			el.before(newone);

	 $(".orbit-anim:last").remove();

	 oAnimating = true;

	 $('.orbit-anim').bind('webkitAnimationEnd', function(){
		oAnimating = false;
		});

	}
};

loadSplashImage = function(){

	//var experiment = Math.floor(Math.random()*10);
	//var experiment = 0;

	//switch( experiment )
	//{
		//case 0:
			//$('.splash-img').css('backgroundImage', 'url(/assets/splash/03.jpg)');
			//$('.splash-img-blur').css('backgroundImage', 'url(/assets/splash/03_blur.jpg)');
			//break;
	//     case 1:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/02.jpg)');
	//         break;
	//     case 2:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/03.jpg)');
	//         break;
	//     case 3:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/04.jpg)');
	//         break;
	//     case 4:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/05.jpg)');
	//         break;
	//     case 5:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/06.jpg)');
	//         break;
	//     case 6:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/07.jpg)');
	//         break;
	//     case 7:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/08.jpg)');
	//         break;
	//     case 8:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/09.jpg)');
	//         break;
	//     case 9:
	//         $('.splash-img').css('backgroundImage', 'url(/assets/splash/10.jpg)');
	//         break;
	//}

};

blurImage = function(amount){
	$('.splash-img-blur').css({
		opacity : amount
	})
};

setSplashHeight = function($el){
	$el.css({
		height: $(window).height()
	});
};

loadSlideshow = function(){
	$('.slideshow-content').cycle({
		slides: '> div.slideshow-img',
		speed:  'fast',
		timeout: 0,
		prev:    '#prev-slide',
		next:    '#next-slide',
		fx: 'fade'
	});
};




if($('body').hasClass('Home')){

	var height =  $('.splash').height() + $('.splash').offset().top;
	var originalPos = $parallaxText.offset().top;

	$parallaxText.css({
		top: originalPos + "px"
	});

	$('.navbar').addClass('navbar-inverse');
}

$(window).resize(function(){
	setSplashHeight($('.splash'));
	windowHeight = $(window).height();
}).resize();


$(window).scroll(function(){

	offset = $(window).scrollTop();


	//navbar
	if(offset >= scrollEnd && !$('.navbar').hasClass('navbar-collapse')){
		$('.navbar').addClass('navbar-collapse');
	}else if(offset < scrollEnd && $('.navbar').hasClass('navbar-collapse')){
		$('.navbar').removeClass('navbar-collapse');
	}

	if($('body').hasClass('Home')){

		if(offset >= windowHeight-scrollEnd && $('.navbar').hasClass('navbar-inverse')){
		   $('.navbar').removeClass('navbar-inverse');
		}else if(offset < windowHeight-scrollEnd && !$('.navbar').hasClass('navbar-inverse')){
			$('.navbar').addClass('navbar-inverse');
		}

		//splash
		if(offset < windowHeight && offset > 0){


			var pos = $parallaxText.offset();

			if(scrollEnd/offset < 1.5 && scrollEnd/offset > 0){
				var newPos = originalPos + (offset*0.4);
				o2 = Math.round((1-(offset/(windowHeight/2)))* 100) / 100;

				if(o2 < 0) o2 = 0;

				blurImage(1-o2);
				$parallaxText.css({
					top: newPos + "px",
					opacity: o2
				});
			}
		}else if(offset <= 0){
			blurImage(0);
			$parallaxText.css({
				opacity: 1
			});
		}else if(offset > windowHeight && !animLoaded){

			console.log('addding animation');

			$('#anim-1').append(branchAnim).addClass('start'); //'branch-anim'

			setTimeout(function(){
				$('#anim-2').append(uiAnim).addClass('start'); //'ui-anim'
			}, 1000);

			setTimeout(function(){
				$('#anim-3').append(orbitAnim).addClass('start');
			}, 2000);

			animLoaded = true;
			oAnimating = true;
			uAnimating = true;
			bAnimating = true;
		}
	}
});

// --------------------------------
// Prevent Scrolling inside the page
//document.body.style.overflow = 'hidden';
//document.body.addEventListener('touchmove',function(event){ event.preventDefault(); },false);

//load splash page

//load slideshow

//on Home

setAnimationElements();

loadSlideshow();

bindAnimations();

loadSplashImage();

//on Blog
// Add target blank to outgoing links generated by markdown
$('a[href^="http://"], a[href^="https://"]').not('a[href*=robincwillis]').attr('target','_blank');
//on Projects
