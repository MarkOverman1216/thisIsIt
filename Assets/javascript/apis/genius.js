var token = 'QShSeSrUUqc4s5T9xdLSMu_LKgs3Fh7TZW4V_mZ3gf-yjUkkY1R6m-DZpWOdJfOZ';
// var clientID = '2HDi0C8ZKC78615OhRRfzO_4S5paJj5dctVAz-Gt6RqSGLv6AYQXLXhAUy6bpUml';
// var clientSecret = 'cKjkmJ5PRkKCnJQrRAHeIR5QC0aJUszREh8Z3VUuF599A5t_zhdG-N0QedauNDC0d7j6RyNntglDLnLe68DPvw'
var redirect = 'https://markoverman1216.github.io/thisIsIt/'
var currentSong;
var maxSong= 2471960; 

function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max)));
}
//generates a random number to pull from genius api
function newRandomSong() {
    songID = getRandomInt(1,maxSong);
    return songID;
}
//makes call to grab a random song from genius
function callGenius(){
    //song ID
    var newSong = newRandomSong();
    var queryURL = `https://api.genius.com/songs/${newSong}?access_token=${token}`;

    $.ajax({
        url: queryURL,
        method: 'GET',
        success: function(res){

        var data = res.response.song;
        var image = $('<img width="350" height="auto"/>');

        if (data.album === null){
            callGenius();
        } else {

            var name = data.album.artist.name;
            var album = data.album.name;
            var song = data.title;
            var albumImg = data.album.cover_art_url
            var releaseDate = data.release_date;
            // console.log(song);
            currentSong = song;
            
            image.attr('src', albumImg);

            $('.albumImage').html(image);
            $('.songName').text('Song Name '+ song);
            $('.albumName').text('Album Name: ' + album);
            $('.release').text('Release Date: '+ releaseDate);
            $('.artist').text('Artist Name: '+ name);
            console.log(name);
            getEvents(name);
        }
    },
    error: function(xhr,status,error){
        callGenius();
        
    }
    })

}
function returnSong(){
    console.log('current   ' + currentSong);
    return currentSong;
}