function vibration( angle ) {
  if ( ( 0 < angle && angle < 5 ) || ( 355 < angle && angle < 360 ) ) {
  } else if ( 5 < angle && angle <= 180 ) {
    window.navigator.vibrate([100, 300, 100, 300]);
  } else if ( 180 < angle && angle <= 355 ){
    window.navigator.vibrate([100, 100, 100, 500]);
  } else {
  }
}
