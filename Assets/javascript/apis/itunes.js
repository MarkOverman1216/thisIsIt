function getSampleAudio(audio, artist) {
  var song = encodeURIComponent(audio)
  var found = false
  console.log(song)
  $.ajax({
    'method': "GET",
    'url': `https://itunes.apple.com/search?term=${song}&media=music`,
    'async': true,
    success: function (json) {
      console.log(json)
      json.results.forEach(result => {
        if (result.artistName == artist && result.trackName == audio) {
          found == true
          // $('#sampleAudio').append(`<source src=${result.previewUrl} type="audio/x-m4a">`)
          var obj = {
            artist: artist,
            song: audio,
            previewUrl: result.previewUrl
          }
          returnArray.push(obj);
          returnArray.sort(() => Math.random() - 0.5);

        }

      });
      if (!found) {
        return ''
      }
    },
    error: function (xhr, status, err) { }
  });

}
