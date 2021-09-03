// Video Player Tip: Conflicting with dom.js so had to place it in it's own file.

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
