var getMap = function() {
  //初始化地图
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(118.855317, 32.035225);
  map.centerAndZoom(point, 5);
  map.enableScrollWheelZoom(); 
  var getPos = function(pos) {
    //创建点
    var points = [];
    for(var i = 0, l = pos.length; i < l; ++i) {
      points.push(new BMap.Point(pos[i].lng, pos[i].lat));
    }
    var len = points.length;
    //创建标记
    var markers = [];
    for(var i = 0; i < len; ++i) {
      markers.push(new BMap.Marker(points[i]));
    }
    //点聚合
    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
    markerClusterer.setMaxZoom(11);
    //信息窗
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
              "<img src='http://7xj230.com1.z0.glb.clouddn.com/" + pos[id].img + "?imageView2/1/w/420/h/420/interlace/1'>"
              "</div>" + 
            "</div>";
          getMsg(con);
        };
      }(i));
    }
  };
  //获取数据
  $.getJSON('/map.json', function(data) {
    getPos(data);
  });
};
getMap();
