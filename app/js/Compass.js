//==============================================================================
//
//  Compass
//
//==============================================================================

gCount = 0;

var current_location;
var destinate_location;

function compass ( sensor ) {
  var deviceDirection;

  //  for iOS
  if( sensor.webkitCompassHeading != undefined ) {
    deviceDirection = sensor.webkitCompassHeading;
  }

  //  for Firefox OS
  else if( sensor.alpha >= 0 ) {
    deviceDirection = sensor.alpha;
  }

  if(destinate_location) {  

    var latitude_diff  = destinate_location.k  - current_location.k;
    var longitude_diff = destinate_location.A - current_location.A;
    var deg            = Math.atan2( latitude_diff, longitude_diff ) * 180 / Math.PI;

    output.innerHTML = "device direction = " + deviceDirection + "</br>";
    output.innerHTML += "deg = " + deg + "</br>";
    deg = (deg + 270) % 360;
    output.innerHTML += "deg from north = " + deg + "</br>";
    deg = deg - deviceDirection;
    if (deg < 0) deg = deg + 360;
    output.innerHTML += "deg from dev dir = " + deg + "</br>";

    output.innerHTML += "vibration" + window.navigator.vibrate;

    //if ( !window.navigator.vibrate ){
      gSound.setAngle( deg );
    //}
    
    if( gCount == 0 ) {
      vibration( deg );
    }
    
    gCount = ( gCount + 1 ) % 10;
  }
}

window.addEventListener( "deviceorientation", compass, false);
