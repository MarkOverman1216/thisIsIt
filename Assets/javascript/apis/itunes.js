
function getSampleAudio(audio, artist) {
  var song = encodeURIComponent(audio)
  console.log(audio + " / " + artist);
  var audio1 = editName(audio);
  var artist1 = editName(artist);
  console.log(audio1 + " / " + artist1);
  var playingAudio;
  $.ajax({
    'method': "GET",
    'url': `https://itunes.apple.com/search?term=${song}&media=music&limit=10`,
    'async': true,
    success: function (json) {
      var result = json.results 
      // console.log(result);
      $('.selected').empty();
      $('.selected').append(`<img src=${result[0].artworkUrl100}/>`)
      var found = false;
      for (i = 0; i < json.results.length; i++){
        var newTrackName = editName(result[i].trackName.toLowerCase());
        var newArtistName = editName(result[i].artistName.toLowerCase());
        //  console.log('edited search results: '+ newTrackName + " / " + newArtistName)
        if (newArtistName=== artist1.toLowerCase() && newTrackName === audio1.toLowerCase()) {
          found = true;
          playingAudio = (result[i].previewUrl);
          // console.log('song we are returning: ' + playingAudio);
          play(playingAudio);
          $('.artistName').text(`Artist: ${artist}`);
          $('.songName').text(`Song: ${audio}`);
          //stops for loops
          i = json.results.length;
          }
        }
        if(found === false){
          console.log('no matching song');
          loadPlayer(1);

        }
    },
    error: function (xhr, status, err) {
      }
     }
  );

}

function play(url){
  console.log('loading: '+ url)
  var audio = (document.querySelector('audio'));
  audio.removeAttribute('src');
  audio.setAttribute('src',url);
  audio.load();
  console.log('playing: '+ url);
  audio.play();
}
//removes the featuring part of artist title because conflicting between how apis name artists;
function editName(str){
    //console.log('passing ' + str)
    var res = str.split('feat').join(',').split('(').join(',').split('.').join(',').split(',');
    res = res[0]
    res = res.trim();
    // console.log('returning ' + res);
    return res;
}

function returnFalse(){
  return false;
}