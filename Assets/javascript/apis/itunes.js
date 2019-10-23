var numFound = 0
function getSampleAudio(audio, artist) {
  var song = encodeURIComponent(audio)

  console.log(song)
  $.ajax({
    'method': "GET",
    'url': `https://itunes.apple.com/search?term=${song}&media=music`,
    'async': true,
    success: function (json) {
      console.log(json)
      json.results.forEach(result => {
        if (result.artistName == artist && result.trackName == audio) {
          numFound++
          $('#sampleAudio').append(`<source src=${json.results[0].previewUrl} type="audio/x-m4a">`)
          console.log(result, artist, 'Found ' + numFound)
        }

      });
    },
    error: function (xhr, status, err) { }
  });

}
