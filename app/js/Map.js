//==========================
//
// Map
//
//==========================


function initialize () {
  var output = document.getElementById("out");  

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = "<p>position is " + latitude + "," + longitude + "</p>";

    latlng = new google.maps.LatLng(latitude, longitude);
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

function update () {
   navigator.geolocation.getCurrentPosition( function (position) {
     latlng = new google.maps.LatLng(position.coords.latitue, position.coords.longitude);
     map.setCenter(latlng); 
   });
}


var watcherID = navigator.geolocation.watchPosition( function (position) {
  latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  map.setCenter(latlng);
});


