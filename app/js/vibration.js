function vibration( angle ) {
  if ( ( 0 < angle && angle < 20 ) || ( 340 < angle && angle < 360 ) ) {
    window.navigator.vibrate();
  } else if ( 20 < angle && angle <= 180 ) {
    window.navigator.vibrate([200, 500, 200, 500]);
  } else if ( 180 < angle && angle <= 340 ){
    window.navigator.vibrate([200, 200, 200, 800]);
  } else {
  }
}
