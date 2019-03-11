var Sound = require('aplay');

var lenny = new Sound();

setInterval(function() {
  lenny.play('Lenny_Diorama_finalcut.wav');
}, 10000);

lenny.on('complete', function () { 
  console.log('Not Lennnyyyyyy!!!!');
});
