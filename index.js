var AudioAdapter = function(){
	return this;
}

AudioAdapter.prototype.play = function(file, callback) {
	
	callback = callback || function() {};

  var player = new Audio();

  player.addEventListener('ended', function() {
    callback();
  });

  player.addEventListener('error', function() {
    callback(new Error('There was a problem playing the requested audio file: '+file));
  });

  player.src = file;

  player.play();

};

module.exports = new AudioAdapter();
