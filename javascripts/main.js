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
  var wxData = {
    "appId": "",
    "imgUrl" : "http://tp2.sinaimg.cn/2709785713/180/40042661305/1",
    "link" : window.location.href,
    "desc" : $('.header').text(),
    "title" : document.title"
  };

  var wxCallbacks = {
    favorite : false,
    ready : function() {},
    cancel : function(resp) {},
    fail : function(resp) {},
    confirm : function(resp) {
      window.location.reload();
    },
    all : function(resp,shareTo) {}
  };
  WeixinApi.share(wxData,wxCallbacks);
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
