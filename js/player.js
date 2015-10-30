(function(){
  window.player = function() {
    this.location = {
      lat: 0,
      lng: 0
    }
    this.accuracyRadius = 0;
  }

  player.prototype.startPositionWatcher = function() {
    navigator.geolocation.watchPosition(
      function(position) {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
      }.bind(this),
      function(error) {
        alert(error.message);
      }
    );
  }

})();
