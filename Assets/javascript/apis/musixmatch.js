var apiKey ='cadbaa98fd2da1ee1cf8a645a287147a';
var genreArray = [];
var returnArray = [];
var page = 1;
//search genres return 10 random songs or artists within the genre and display
//search for a similar artist, return 10 random similar artists and display
//each returned 
function searchSong(song){
    var songID;
    var query = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${song}&s_track_rating=desc&page_size=100&page=${page}&apikey=${apiKey}`;

    $.ajax({
        url: query,
        method:'GET',
        success: function(data){
        var dataList = data.message.body.track_list;
        // console.log(dataList);
        for(i = 0; i < dataList.length; i++){
            console.log(dataList[i].track.artist_name);
        }
        console.log('-----------------------')
        }
    })
    
}

function searchArtist(artist){
    genreArray = [];
    var query = `https://api.musixmatch.com/ws/1.1/`;
    var extension = `artist.search?q_artist=${artist}&apikey=${apiKey}`;
    var artistID;
    $.ajax({
        url: query + extension,
        method: 'GET',
        success: function(data){
            var dataList = data.message.body.artist_list;
            for(i = 0; i < dataList.length; i ++){
                if((dataList[i].artist.artist_name).toLowerCase() === artist.toLowerCase()){
                    artistID = dataList[i].artist.artist_id;
                }
            }
            console.log(artistID);
        }, complete: function(){
            extension = `artist.albums.get?artist_id=${artistID}&apikey=${apiKey}`;
            $.ajax({
                url: query + extension,
                method: 'GET',
                success: function(data){
                    var dataList = data.message.body.album_list;
                    for (i=0; i < dataList.length; i++){
                        if(dataList[i].album.primary_genres.music_genre_list.length === 0){

                        } else {
                            if(dataList[i].album.primary_genres.music_genre_list[0].music_genre.music_genre_id !== 34 ){
                                if(!genreArray.includes(dataList[i].album.primary_genres.music_genre_list[0].music_genre.music_genre_id)){
                                    genreArray.push(dataList[i].album.primary_genres.music_genre_list[0].music_genre.music_genre_id);
                                }
                                console.log(genreArray);
                            }
                        }
                }
            }
    })}}) 
}

function searchGenre(array){
    var query = `https://api.musixmatch.com/ws/1.1/`;
    var extension = `artist.albums.get?artist_id=71526&apikey`;
}