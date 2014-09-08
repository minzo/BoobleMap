function vibration( angle ) {
  if ( -5 < angle && angle < 5 ) {
    document.write("correct angle");
  } else if ( -180 < angle && angle < -5 ) {
    window.navigator.vibrate([100, 300, 100, 300]);
  } else if ( 5 < angle && angle < 180 ){
    window.navigator.vibrate([100, 100, 100, 500]); 
  } else {
    document.write("angle validation error");
  }
}
