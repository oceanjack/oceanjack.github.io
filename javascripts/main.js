var playMusic = function() {
  var play = false;
  $('.head .name').on('click', function() {
    if(play) {
      $('audio')[0].pause();
      $('.head .name').css('color','#999');
    } else {
      $('audio')[0].play();
      $('.head .name').css('color','#fff');
    }
    play = !play;
  }, false);
}();

var historyBack = function() {
  $('.head .back').on('click', function() {
    history && history.back();
    if(history.length <= 0) {
      window.location.assign(location.origin);
    }
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
  var imgUrl = window.location.origin + "/images/share.jpg";
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

//评论
var duoshuoQuery = {short_name:"oceanjack"};
var duoshuo = function() {
  if(typeof indexPage != 'undefined' && indexPage) {
    return;
  }
  var node = $('<div class="ds-thread" data-thread-key="' + $('.article .date').text() + "_" + '" data-title="' + $('.header').text() + '" data-url="' + window.location.href + '"></div>');
  $('.content-wrapper').append(node);
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
};
duoshuo();
