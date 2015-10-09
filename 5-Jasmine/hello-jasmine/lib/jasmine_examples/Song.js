function Song() {
}

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

if (typeof module !== 'undefined') {
  module.exports = Song;
}
