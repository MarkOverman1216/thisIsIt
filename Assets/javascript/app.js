//makes apis calls when new song button is pressed


$('#search').on('click',function(){
    // var song = $('#searchInput').val().trim();
    // searchSong(song);
    var artist = $('#searchInput').val().trim();
    searchArtist(artist);
});

