var getMap = function() {
	  var map = new BMap.Map("allmap");
	  var point = new BMap.Point(118.855317, 32.035225);
	  map.centerAndZoom(point, 5);
	  map.enableScrollWheelZoom();
	  var getPos = function(pos) {
	    var points = [];
	    for(var i = 0, l = pos.length; i < l; ++i) {
	      points.push(new BMap.Point(pos[i].lng, pos[i].lat));
	    }
	    var len = points.length;
	    var markers = [];
	    for(var i = 0; i < len; ++i) {
	      markers.push(new BMap.Marker(points[i]));
	    }
	    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
	    markerClusterer.setMaxZoom(11);
	    for(var i = 0; i < len; ++i) {
	      markers[i].addEventListener("click", function(id) {
	        return function() {
	          var this_ = this;
	          var getMsg = function(con) {
	            var infoWindow = new BMap.InfoWindow(con);
	            this_.openInfoWindow(infoWindow);
	            window.setTimeout(function() {
	            	infoWindow.redraw();
	            }, 4700);
	          };
	        	var con = 
              "<div class='article maparticle'>" +
                "<div class='header'>" + pos[id].title + "</div>" +
                "<div class='content'>" + 
                  "<p>" + pos[id].text + "<p>" +
                "<img src='" + pos[id].img + "'>"
                "</div>" + 
              "</div>";
		        getMsg(con);
	        };
	      }(i));
	    }
	  };

    //临时数据
	  var pos = [
      {
        lat: 40.01629,
        lng: 116.314607,
        title: '圆明园',
        text: '2014年12月25日，跟高中同学一起来的圆明园。今天北京天气不错，难得雾都能碰到这种天气，于是啪啪啪拍了不少照片。自从辞职后一直要说出远门来着，结果一直忙着各种事情，今天总算放松下了~',
        img: 'images/000003/back2.jpg'
      },
      {
        lat: 40.019374,
        lng: 116.319269,
        title: '圆明园',
        text: '遥想当年，一把火，残垣断壁，我们无力改变历史。还看今朝，一把火，燃烧激情，愿青春过去依然屹立。',
        img: 'images/000003/back3.jpg'
      },
      {
        lat: 39.911356,
        lng: 116.407926,
        title: '国家博物馆',
        text: '2014年12月26日，早上出门独自溜达，从天安门西侧一路向东走去。起初是想走到国家博物馆，后发现路途异常艰难，三步一小查，五步一大查，整个路上各种检查，略感无奈。最终花了将近一上午终于走到博物馆与老姐会师。然后下午就一起看展览了。下图为罗丹的雕塑展一角-亚当和夏娃',
        img: 'images/000003/back4.jpg'
      },
      {
        lat: 40.002854,
        lng: 116.342164,
        title: '巴依老爷(清华东门)',
        text: '2014年12月27日，跟北京集训队的一些同学约了顿饭。在北京生活不容易呀，感觉同学沧桑了不少。后来那天去了798,可以没有拍照。巴依老爷的这个酸奶还不错～～',
        img: 'images/000003/back5.jpg'
      },
      {
        lat: 32.003948,
        lng: 118.774106,
        title: '仙乐咖啡',
        text: '2014年12月31日，室友回家了就剩我一人，只好独自来到这家咖啡馆，点了点小吃，开启电脑写代码来度过这慢慢长夜。又一年了，2014年经历了太多变故，一句话诉说不清，要非得概括下的话，那就是：痛，并快乐着。',
        img: 'images/000003/back6.jpg'
      }
    ]
	  getPos(pos);
}();

