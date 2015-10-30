(function(){
  window.player = function() {
    this.location = {
      lat: 0,
      lng: 0
    }
    this.accuracyRadius = 0;
  }

  player.prototype.startPositionWatcher = function() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
      desiredAccuracy: 0,
      // frequency: 1
    }
    navigator.geolocation.watchPosition(
      function(position) {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
      }.bind(this),
      function(error) {
        alert(error.message);
      },
      options
    );
  }

})();
