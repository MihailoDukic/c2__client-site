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

// Video Player 

$('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="700" height="400" src="https://www.youtube.com/embed/qNHhmnqZpdg?enablejsapi=1"" frameborder="0" allowfullscreen></iframe>');
  
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };

  // Contact Form Toggle 



 

  
  
  