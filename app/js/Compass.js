//==============================================================================
//
//  Compass
//
//==============================================================================

window.addEventListener( "deviceorientation", function( sensor ) {

    var deviceDirection;

    //  for iOS
    if( sensor.webkitCompassHeading != undefined ) {
        deviceDirection = sensor.webkitCompassHeading;
    }

    //  for Firefox OS
    else if( sensor.alpha >= 0 ) {
        deviceDirection = sensor.alpha;
    }

    var current   = { latitude:0, longitude:0 };
    var goal      = { latitude:0, longitude:1 };
    var latitude  = goal.latitude  - current.latitude;
    var longitude = goal.longitude - current.longitude;
    var deg       = Math.radToDeg( Math.atan2( latitude, longitude ) );

    if( deg < 0 ) deg += 360;

    vibration( deviceDirection - deg );

}, false);
