var apiKey = 'cadbaa98fd2da1ee1cf8a645a287147a'
var query = `https://api.musixmatch.com/ws/1.1/`
var genreArray = []
var returnArray = []
var page = 1
window.returnIndex = 0
var firstSuccess = true
//search genres return 10 random songs or artists within the genre and display
//search for a similar artist, return 10 random similar artists and display
//each returned

function searchSong(song) {
  var songID
  var query = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${song}&s_track_rating=desc&page_size=100&page=${page}&apikey=${apiKey}`

  $.ajax({
    url: query,
    method: 'GET',
    success: function(data) {
      var dataList = data.message.body.track_list
      // console.log(dataList)
      for (i = 0; i < dataList.length; i++) {
        // console.log(dataList[i].track.artist_name)
      }
      // console.log('-----------------------')
    },
  })
}

function searchArtist(artist) {
  genreArray = []
  var extension = `artist.search?q_artist=${artist}&apikey=${apiKey}`
  var artistID

  $.ajax({
    url: query + extension,
    method: 'GET',
    success: function(data) {
      artistID = getArtistID(data, artist)
      // console.log(artistID)
    },
  }).done(function() {
    extension = `artist.albums.get?artist_id=${artistID}&apikey=${apiKey}`
    $.ajax({
      url: query + extension,
      method: 'GET',
      success: function(data) {
        getGenreId(data)
      },
    })
      .done(function() {
        searchGenre(genreArray)
      })
      .done(function() {
        setTimeout(function() {
          if (returnIndex === 0) {
            loadPlayer(0)
          } else {
            loadPlayer(1)
          }
        }, 700)
      })
  })
}
function gliderJS(data) {
  // console.log(data)
}
//retrieves artistID
function getArtistID(data, artist) {
  var dataList = data.message.body.artist_list
  for (i = 0; i < dataList.length; i++) {
    if (dataList[i].artist.artist_name.toLowerCase() === artist.toLowerCase()) {
      return dataList[i].artist.artist_id
    }
  }
}

//gets genreID
function getGenreId(data) {
  var dataList = data.message.body.album_list
  for (i = 0; i < dataList.length; i++) {
    if (dataList[i].album.primary_genres.music_genre_list.length === 0) {
    } else {
      if (dataList[i].album.primary_genres.music_genre_list[0].music_genre.music_genre_id !== 34) {
        if (!genreArray.includes(dataList[i].album.primary_genres.music_genre_list[0].music_genre.music_genre_id)) {
          genreArray.push(dataList[i].album.primary_genres.music_genre_list[0].music_genre.music_genre_id)
        }
      }
    }
  }
}

//pulls songs based on genre and returns to the user;
function searchGenre(array) {
  firstSuccess = true
  returnArray = []
  for (i = 0; i < genreArray.length; i++) {
    var genreID = genreArray[i]
    var extension = `track.search?f_music_genre_id=${genreID}&page_size=100&s_track_rating=desc&apikey=${apiKey}`

    $.ajax({
      url: query + extension,
      method: 'GET',
      success: function(data) {
        var dataList = data.message.body.track_list
        // console.log(dataList)
        for (i = 0; i < dataList.length; i++) {
          var dataGenreList = dataList[i].track.primary_genres.music_genre_list
          var check = true
          for (x = 0; x < dataGenreList.length; x++) {
            // checks if has correct genres to users choice
            if (
              genreArray.includes(
                dataGenreList[x].music_genre.music_genre_id || dataGenreList[x].music_genre.music_genre_id === 34
              )
            ) {
            } else {
              // check = false;
            }
          }
          if (check === true) {
            var obj = {
              artist: dataList[i].track.artist_name,
              song: dataList[i].track.track_name,
            }
            returnArray.push(obj)
            returnArray.sort(() => Math.random() - 0.5)
            // getSampleAudio(dataList[i].track.track_name, dataList[i].track.artist_name)
          } else {
            check = true
          }
        }
        if (firstSuccess) {
          firstSuccess = false
          console.log(returnArray)
          loadStart()
        }
      },
    })
  }
}

function loadStart() {
  $('.hideLeft').html(`<img>`)
  $('.prevLeftSecond').html(`<img>`)
  $('.prev').html(`<img>`)
  getSampleAudio(
    window.returnArray[window.returnIndex].song,
    window.returnArray[window.returnIndex].artist,
    window.returnIndex,
    '.selected'
  )
  getSampleAudio(
    window.returnArray[window.returnIndex + 1].song,
    window.returnArray[window.returnIndex + 1].artist,
    window.returnIndex + 1,
    '.next'
  )
  getSampleAudio(
    window.returnArray[window.returnIndex + 2].song,
    window.returnArray[window.returnIndex + 2].artist,
    window.returnIndex + 2,
    '.nextRightSecond'
  )
  getSampleAudio(
    window.returnArray[window.returnIndex + 3].song,
    window.returnArray[window.returnIndex + 3].artist,
    window.returnIndex + 3,
    '.hideRight'
  )
}

function loadPlayer(num) {
  // console.log(returnArray)
  if (returnArray.length > 0) {
    // console.log(`Current index at ${window.returnIndex}`)
    if (num === 0) {
      returnAudio()

    } else if (num === 1) {
      window.returnIndex = window.returnIndex + 1
      returnAudio()
    } else if (num === 2) {
      window.returnIndex = window.returnIndex + 2
      returnAudio()
    } else if (num === -1) {
      returnAudio()
      window.returnIndex = window.returnIndex - 1
    } else if (num === -2) {
      window.returnIndex = window.returnIndex - 2
      returnAudio()
    }
  } else {
    // console.log('false no songs in array')
  }
  // console.log(window.returnIndex)
}

function returnAudio() {
  var nextSong = []
  nextSong.push(returnArray[returnIndex].song, returnArray[returnIndex].artist)
  getSampleAudio(nextSong[0], nextSong[1])
}
