
window.smoothScroll = function(target) {
   var scrollContainer = target;
   // document.getElementById('header-rachkova')
   do { //find scroll container
       scrollContainer = scrollContainer.parentNode;
       if (!scrollContainer) return;
       scrollContainer.scrollTop += 1;
   } while (scrollContainer.scrollTop == 0);

   var targetY = 0;
   do { //find the top of target relatively to the container
       if (target == scrollContainer) break;
       if ( $( window ).width() > 1200 ) {targetY += target.offsetTop - 100;}
       else {targetY += target.offsetTop - 60;}

   } while (target = target.offsetParent);

   scroll = function(c, a, b, i) {
       i++; if (i > 30) return;
       c.scrollTop = a + (b - a) / 30 * i;
       setTimeout(function(){ scroll(c, a, b, i); }, 20);
   }
   // start scrolling
   scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);

   // load animation at target

}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

var projekteMain = $('#projekte-index-rachkova');
var projekteHr = $('#projekteHrAnimation');
var projekteHeadline = $('#projekteHeader');
var projekteSub = $('.projekte-index-kategorien-container');
var isProjekteInView = Utils.isElementInView($('#projekte-index-rachkova'), false);


// var leistungen = document.getElementById('leistungen-rachkova');
// var buero = document.getElementById('buero-rachkova');



// Event Listener
jQuery(function(){

    //here is a closure variable

    $( window ).resize(function() {



    });

    $( window ).on('load', function(){

      // disableScroll();
      // enableScroll().setTimeout(window.alert, 500, 'scrolling enabled');
      // var projekte = $('#projekte-index-rachkova').first().position().top;
      // var leistungen = $('#leistungen-rachkova').first().position().top;
      // var buero = $('#buero-rachkova').first().position().top;

    });

    $('body').scroll(function(e){

      if ( (isProjekteInView) && !(projekteMain.hasClass("animationFired")) ) {
          projekteMain.addClass("animationFired");
          projekteHeadline.addClass("rachkova-animation-fromTopFast");
          projekteHeadline.css("opacity", "1");
          projekteHr.addClass("rachkova-hr-animationFast");
          projekteSub.addClass("rachkova-animation-fromBottomFast");


      }

    });
});



// disable enable scroll helpers


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

// viewport check
