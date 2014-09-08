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

}, false);

current = { x:0, y:0 };
goal    = { x:0, y:1 };

console.log(
    Math.radToDeg( Math.atan2( this.longitude, this.latitude ) )
);
