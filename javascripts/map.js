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
	    //for(var i = 0; i < len; ++i) {
	    //  var curve = new BMapLib.CurveLine([point, points[i]], {strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});
	    //  map.addOverlay(curve);
	    //}
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
        lng: 0,
        lat: 0,
        title: '无',
        text: '无',
        img: 'images/000003/back.jpg'
      }
    ]
	  getPos(pos);
}();

