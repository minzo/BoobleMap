//------------------------------------------------------------------------------
//　Sound
//------------------------------------------------------------------------------

(function( window, undefined ) {

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var i = 0;

Sound = function() {

    var self = this instanceof Sound
             ? this
             : Object.create( Sound.prototype );

    this.context        = new AudioContext();
    this.oscillatorNode = this.context.createOscillator();
    this.pannerNode     = this.context.createPanner();
    this.gainNode       = this.context.createGain();

    this.gainNode.gain.value = 0.5;

    this.oscillatorNode.type = 'triangle';
    this.oscillatorNode.frequency.value = 440;

    this.pannerNode.panningModel = 'equalpower';

    this.oscillatorNode.connect( this.gainNode );
    this.gainNode.connect( this.pannerNode );
    this.pannerNode.connect( this.context.destination );

    this.oscillatorNode.start(0);

    this.angle = 0;

    var update = function() {
        self.pannerNode.setPosition( Math.cos(self.angle), 0, -Math.sin(self.angle) );
        setTimeout( update, 1000 / 30 );
    };
    update();

    return self;
};

Sound.prototype.setAngle = function( deg ) {
    this.angle = -Math.PI / 180 * deg  + Math.PI / 2;
};

gSound = new Sound();


})( window );
