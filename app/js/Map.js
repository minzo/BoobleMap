//==========================
//
// Map
//
//==========================


function initialize () {
  output = document.getElementById("out");  

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = "<p>position is " + latitude + "," + longitude + "</p>";

    var latlng = new google.maps.LatLng(latitude, longitude);
    opts = {
      zoom: 13,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), opts);
  };

  function error () {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating...</p>";
  navigator.geolocation.getCurrentPosition(success, error);
  
}

function current_position () {

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = "<p>position is " + latitude + "," + longitude + "</p>";
    var latlng = new google.maps.LatLng(latitude, longitude);
    map.setCenter(latlng); 
  };

  function error () {
    output.innerHTML = "failed to get current position";
  };
  navigator.geolocation.getCurrentPosition(success, error);
}

/*
function set_destination () {
  directions = new GDirections(map, document.getElementById("route"));
  var destination = document.dest_form.destination_text_box.value;
  directions.load("from: 新宿駅 to: 秋葉原駅", {locale: 'ja_JP'})
}
*/

function set_destination () {
  var destination_str = document.destination.destination_text_box.value;
  var geocoder = new google.maps.Geocoder();
  console.log(destination_str);
  geocoder.geocode({
    address: destination_str,
    region: "jp"
  }, 
  function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);

      var latlng = results[0].geometry.location;
      //Compass
      destinate_location = latlng;

      new google.maps.Marker({
        position: latlng,
        map:map
      });
    }
  });
}

var watcherID = navigator.geolocation.watchPosition( function (position) {
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //Compass
  current_location = latlng;

  if ( !marker ) {  
    var marker = new google.maps.Marker({
      position: latlng,
      map: map    
    });
  } else {
    marker.position = latlng;
  }
});
