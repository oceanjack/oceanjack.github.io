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

	  $.ajax({
      type: 'GET',
      url: 'http://oceanjack.net/map.json',
      dataType: 'json',
      success: function(data) {
        getPos(data);
      }
    });
}();

