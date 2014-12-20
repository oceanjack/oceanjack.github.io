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

var shareWeixin = function() {
  var imgUrl = window.location.origin + $('.article img')[0].src;
  var lineLink = window.location.href;
  var descContent = "文章 - " + $('.header').text();
  var shareTitle = document.title;
  var appid = '';
  function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
      "appid": appid,
      "img_url": imgUrl,
      "img_width": "200",
      "img_height": "200",
      "link": lineLink,
      "desc": descContent,
      "title": shareTitle
    }, function(res) {
      window.location.reload();
    });
  };
  function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
      "img_url": imgUrl,
      "img_width": "200",
      "img_height": "200",
      "link": lineLink,
      "desc": descContent,
      "title": shareTitle
    }, function(res) {
      window.location.reload();
    });
  }
  function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
      "content": descContent,
      "url": lineLink,
    }, function(res) {
      window.location.reload();
    });
  }
  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
      shareFriend();
    });
    WeixinJSBridge.on('menu:share:timeline', function(argv){
      shareTimeline();
    });
    WeixinJSBridge.on('menu:share:weibo', function(argv){
      shareWeibo();
    });
  }, false);
}();
