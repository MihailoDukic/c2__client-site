// Toggle Menu 
const subMenuOne = document.querySelector('.sub'); 
const subMenuTwo = document.querySelector('.sub-two'); 
const subMenuThree = document.querySelector('.sub-three'); 
const subMenuFour = document.querySelector('.sub-four'); 
const toggleMenu = document.querySelector('#toggle-menu').addEventListener('click', () => {

    let mobileMenu = document.querySelector('.mobile-menu');
    let overlayBg = document.querySelector('.overlay-bg');

    mobileMenu.classList.toggle('toggleMenu');
    overlayBg.classList.toggle('toggleOverlay');
    subMenuOne.classList.remove('toggle-subMenu');
    subMenuTwo.classList.remove('toggle-subMenu-two');
    subMenuThree.classList.remove('toggle-subMenu-three');
    subMenuFour.classList.remove('toggle-subMenu-four'); 



}); 




// Toggle Submenu 

const toggleSub = document.querySelector('#toggle-sub-one').addEventListener('click', () => {
    subMenuOne.classList.toggle('toggle-subMenu');
    subMenuTwo.classList.remove('toggle-subMenu-two');
    subMenuThree.classList.remove('toggle-subMenu-three');
    subMenuFour.classList.remove('toggle-subMenu-four');
})

const toggleSubtwo = document.querySelector('#toggle-sub-two').addEventListener('click', () => {
    subMenuTwo.classList.toggle('toggle-subMenu-two');
    subMenuOne.classList.remove('toggle-subMenu');
    subMenuThree.classList.remove('toggle-subMenu-three');
    subMenuFour.classList.remove('toggle-subMenu-four');
})

const toggleSubthree = document.querySelector('#toggle-sub-three').addEventListener('click', () => {
    subMenuThree.classList.toggle('toggle-subMenu-three');
    subMenuOne.classList.remove('toggle-subMenu');
    subMenuTwo.classList.remove('toggle-subMenu-two');
    subMenuFour.classList.remove('toggle-subMenu-four');
})

const toggleSubfour = document.querySelector('#toggle-sub-four').addEventListener('click', () => {
    subMenuThree.classList.remove('toggle-subMenu-three');
    subMenuOne.classList.remove('toggle-subMenu');
    subMenuTwo.classList.remove('toggle-subMenu-two');
    subMenuFour.classList.toggle('toggle-subMenu-four');
})

// Scroll Menu Header Toggle 

// scroll animation 

window.onscroll = function() {
    fixedNav();
}

function fixedNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 300) {
      
        document.querySelector('header').classList.add('scrollToggle');
    } else {
        document.querySelector('header').classList.remove('scrollToggle');
    }
}

// Owl Slider 

// Owl Carousel 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav: true,
      items: 1,
      mouseDrag: false,
      singleItem: true,
      touchDrag: false,
      autoplay: true,
      loop: true,
      animateOut: 'fadeOut',
      navText: [
        "<img src='./IMAGES/arrow-w-left.png' alt='' style='width: 25px; height: auto;'>",
        "<img src='./IMAGES/arrow-w-right.png' alt='' style='width: 25px; height: auto;'>"
      ],

    });
  });

  // Video Toggle 

  (function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();
 
function labnolThumb(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}
 
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
} 



// Counter 

$(document).ready(function(){
    $('.counter').counterUp({
      
    });
  });