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
	    var markers = [new BMap.Marker(point)];
	    for(var i = 0; i < len; ++i) {
	      markers.push(new BMap.Marker(points[i]));
	    }
	    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
	    markerClusterer.setMaxZoom(11);
	    for(var i = 0; i < len; ++i) {
	      markers[i + 1].addEventListener("click", function(id) {
	        return function() {
	          var this_ = this;
	          var getMsg = function(con) {
	            var infoWindow = new BMap.InfoWindow(con);
	            this_.openInfoWindow(infoWindow);
	            window.setTimeout(function() {
	            	infoWindow.redraw();
	            }, 4700);
	          };
	        	var con = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + pos[id].title + "</h4>" + 
            "<img style='float:right;margin:4px' id='imgDemo' src='" + pos[id].img + "' width='139' height='104' title='" + pos[id].title + "'/>" + 
            "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>" + pos[id].text + "</p>"
		        getMsg(con);
	        };
	      }(i));
	    }
	  };

    //临时数据
	  var pos = [
      {
        lng: 40.0080982,
        lat: 116.2982148,
        title: '圆明园',
        text: '2014年12月25日，跟高中同学一起来的圆明园。今天北京天气不错，难得雾都能碰到这种天气，于是啪啪啪拍了不少照片。自从辞职后一直要说出远门来着，结果一直忙着各种事情，今天总算放松下了~',
        img: 'images/000003/back2.jpg'
      }
    ]
	  getPos(pos);
}();

