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

    console.log("deg1 = " + deg);
    console.log("dD = " + deviceDirection);
    deg = deviceDirection - deg;
    console.log("deg2 = " + deg);

    if( deg < 0 ){
      deg += 360;
    } else if (deg > 360){
      deg -= 360;
    }

    if( gCount == 0 ) {
      vibration( deg );
    }

    gCount = ( gCount + 1 ) % 10;
  }
}

window.addEventListener( "deviceorientation", compass, false);
