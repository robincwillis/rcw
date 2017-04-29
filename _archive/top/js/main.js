// Prevent Scrolling inside the page

document.body.style.overflow = 'hidden';
document.body.addEventListener('touchmove',function(event){ event.preventDefault(); },false);

$(window).load(function() {  
    $(".name").toggleClass("fadeinA").toggleClass("changeA");  
    $(".tagline").toggleClass("fadeinB").toggleClass("changeB");
    $(".action").toggleClass("fadeinC").toggleClass("changeC");
});  

var experiment = Math.floor(Math.random()*10);

switch( experiment )
{
    case 0:
        $('body').css('backgroundImage', 'url(top/splash/01.jpg)');
        break;
    case 1:
        $('body').css('backgroundImage', 'url(top/splash/02.jpg)');
        break;
    case 2:
        $('body').css('backgroundImage', 'url(top/splash/03.jpg)');
        break;
    case 3:
        $('body').css('backgroundImage', 'url(top/splash/04.jpg)');
        break;
    case 4:
        $('body').css('backgroundImage', 'url(top/splash/05.jpg)');
        break;
    case 5:
        $('body').css('backgroundImage', 'url(top/splash/06.jpg)');
        break;
    case 6:
        $('body').css('backgroundImage', 'url(top/splash/07.jpg)');
        break;
    case 7:
        $('body').css('backgroundImage', 'url(top/splash/08.jpg)');
        break;
    case 8:
        $('body').css('backgroundImage', 'url(top/splash/09.jpg)');
        break;
    case 9:
        $('body').css('backgroundImage', 'url(top/splash/10.jpg)');
        break;
}