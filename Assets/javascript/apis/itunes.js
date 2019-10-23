function getSampleAudio(audio) {
  var song = encodeURIComponent(audio)
  console.log(song)
  $.ajax({
    'method': "GET",
    'url': `https://itunes.apple.com/search?term=${song}&media=music`,
    'async': true,
    success: function (json) {
      console.log(json)
      console.log($('#sampleAudio'))
      $('#sampleAudio').append(`<source src=${json.results[0].previewUrl} type="audio/x-m4a">`)
      console.log($('#samlpeAudio'))
    },
    error: function (xhr, status, err) { }
  });

}
