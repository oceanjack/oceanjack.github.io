var playMusic = function() {
  var play = false;
  $('.head').on('click', function() {
    if(play) {
      $('audio')[0].pause();
      $('.head').css('color','#999');
    } else {
      $('audio')[0].play();
      $('.head').css('color','#fff');
    }
    play = !play;
  }, false);
}();
