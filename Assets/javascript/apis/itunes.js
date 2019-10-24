function getSampleAudio(audio, artist, index, location) {
  var song = encodeURIComponent(audio)
  // console.log(audio + ' / ' + artist)
  var audio1 = editName(audio)
  var artist1 = editName(artist)
  // console.log(audio1 + ' / ' + artist1)
  var playingAudio
  $.ajax({
    method: 'GET',
    url: `https://itunes.apple.com/search?term=${song}&media=music&limit=10`,
    async: true,
    success: function(json) {
      var result = json.results
      // console.log(result)
      var found = false
      for (i = 0; i < json.results.length; i++) {
        var newTrackName = editName(result[i].trackName.toLowerCase())
        var newArtistName = editName(result[i].artistName.toLowerCase())
        //  console.log('edited search results: '+ newTrackName + " / " + newArtistName)
        if (newArtistName === artist1.toLowerCase() && newTrackName === audio1.toLowerCase()) {
          found = true
          window.returnArray[index].previewUrl = result[i].previewUrl
          window.returnArray[index].albumCover = result[i].artworkUrl100
          // console.log('song we are returning: ' + playingAudio);

          if (location) {
            // console.log('I GOT HERE', location)
            $(location).html(`<img src='${result[i].artworkUrl100}'></img>`)
            if (location == '.selected') {
              setMusic()
            }
          }
          //stops for loops
          i = json.results.length
        }
      }
      if (found === false) {
        // console.log('no matching song')
        // loadPlayer(1)
        window.returnArray[index].previewUrl = 'Not Available'
        window.returnArray[index].albumCover =
          'http://fc08.deviantart.net/fs71/f/2011/185/f/9/no_cover_itunes_by_stainless2-d3kxnbe.png'
        if (location) {
          $(location).html(
            `<img src='http://fc08.deviantart.net/fs71/f/2011/185/f/9/no_cover_itunes_by_stainless2-d3kxnbe.png'></img>`
          )
        }
      }
    },
    error: function(xhr, status, err) {},
  })
}

function setMusic() {
  console.log(window.returnArray[window.returnIndex])
  $('.artistName').text(`Artist: ${window.returnArray[window.returnIndex].artist}`)
  $('.songName').text(`Song: ${window.returnArray[window.returnIndex].song}`)
  if (window.returnArray[window.returnIndex].previewUrl == 'Not Available') {
    $('.unavailable').text(`We're sorry, this song is unavailable for preview`)
  } else {
    $('.unavailable').empty()
  }
  play(window.returnArray[window.returnIndex].previewUrl)
}

function play(url) {
  // console.log('loading: ' + url)
  var audio = document.querySelector('audio')
  audio.removeAttribute('src')
  audio.setAttribute('src', url)
  audio.load()
  // console.log('playing: ' + url)
  audio.play()
}
//removes the featuring part of artist title because conflicting between how apis name artists;
function editName(str) {
  // console.log('passing ' + str)
  var res = str
    .split('feat')
    .join(',')
    .split('(')
    .join(',')
    .split('.')
    .join(',')
    .split(',')
  res = res[0]
  res = res.trim()
  // console.log('returning ' + res);
  return res
}

function returnFalse() {
  return false
}
