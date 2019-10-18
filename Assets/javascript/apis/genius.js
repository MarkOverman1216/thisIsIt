var token = 'QShSeSrUUqc4s5T9xdLSMu_LKgs3Fh7TZW4V_mZ3gf-yjUkkY1R6m-DZpWOdJfOZ';
// var clientID = '2HDi0C8ZKC78615OhRRfzO_4S5paJj5dctVAz-Gt6RqSGLv6AYQXLXhAUy6bpUml';
// var clientSecret = 'cKjkmJ5PRkKCnJQrRAHeIR5QC0aJUszREh8Z3VUuF599A5t_zhdG-N0QedauNDC0d7j6RyNntglDLnLe68DPvw'
var redirect = 'https://markoverman1216.github.io/thisIsIt/'
var song = 378195;
var queryURL = `https://api.genius.com/songs/${song}?access_token=${token}`;

var maxSong= 2471960; 

function getRandomInt(min, max) {
    var a = (Math.floor(Math.random() * (max)));
}

function newRandomSong() {
    songID = getRandomInt(1,maxSong);
    randomSong();
}

function callGenius(){
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(res){
        console.log(res);
        // return res;
    })
}