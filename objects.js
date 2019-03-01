var playlist = {artist names: "song titles"};

function updatePlaylist(playlist, "artistName", songTitle){
  return playlist
}

function removeFromPlaylist(playlist){
  delete playlist.song titles;
  return playlist
}

var playlist = new Object({keys: '0'});

 function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
 }