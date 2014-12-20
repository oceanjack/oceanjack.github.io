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

var baiduTongji = function() {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?d53d9744191994a867ef124ceec8cca2";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}();
