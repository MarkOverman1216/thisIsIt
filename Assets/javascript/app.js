//makes apis calls when new song button is pressed

$(document).ready(function(){
    $('#searchButton').on('click', function () {
        event.preventDefault()
        $('.musicBanner').show(2000,'swing');
        // var song = $('#searchInput').val().trim();
        // searchSong(song);
        var artist = $('#searchInput').val().trim();
        searchArtist(artist);
        window.returnIndex = 0;
    });
    
    $('#nextSong').on('click',function(){
        event.preventDefault()

      
        // loadPlayer();
    })
    $('#searchInput').keydown(function(event){
        if(event.key === 'Enter'){
            $('.musicBanner').show();
            var artist = $('#searchInput').val().trim();
            searchArtist(artist);
            window.returnIndex = 0;
            var div = $('<div>')
            $('#carousel').append(`            <div class="hideRight">
            <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg">
        </div>`)
        }
    })
    
    $('#prev').hide();
    $('#next').hide();
    
    
    
})
