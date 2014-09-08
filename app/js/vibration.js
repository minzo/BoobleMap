function vibration( deg ) {
  if ( -5 < deg && deg < 5 ) {

  } else if ( -180 < deg ) {
    window.navigator.vibrate([100, 300, 100, 300]);
  } else {
    window.navigator.vibrate([100, 100, 100, 500]); 
  }
}
