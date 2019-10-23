//makes apis calls when new song button is pressed


$('#search').on('click', function () {
    // var song = $('#searchInput').val().trim();
    // searchSong(song);
    var artist = $('#searchInput').val().trim();
    searchArtist(artist);
});


// getSampleAudio('Lizzo+Truth+Hurts');
// getSampleAudio('Even Though Im Leaving');
// getSampleAudio('Monsters');
// var songs = [
// {artist: "Arijit Singh", song: "Chal Wahan Jaate Hain"},
// {artist: "XXXTENTACION", song: "Jocelyn Flores"},
// {artist: "Eminem feat. Rihanna", song: "The Monster"},
// {artist: "24kgoldn", song: "Valentino"},
// {artist: "Arijit Singh", song: "Phir Mohabat (MTV Unplugged Version)"},
// {artist: "Arijit Singh", song: "My Name Is Ranveer Ching"},
// {artist: "Ritviz", song: "Udd Gaye - Bacardi House Party Sessions"},
// {artist: "Arijit Singh", song: "The Arijit Singh Classic Mashup"},
// {artist: "Mithoon, Yo Yo Honey Singh, Ankit Tiwari, Amaal Ma… Khan, Sabri Brothers, Arijit Singh & Neeti Mohan", song: "Romantic Mashup 2"},
// {artist: "Sido", song: "Tausend Tattoos"},
// {artist: "Ceza", song: "Suspus"},
// {artist: "Jeet Gannguli feat. Sharib-Toshi & Arijit Singh", song: "Arijit Singh Mashup (By DJ Paroma)"},
// {artist: "Sheck Wes", song: "Mo Bamba"},
// {artist: "Arijit Singh", song: "Dua (MTV Unplugged Version)"},
// {artist: "Kina feat. Adriana Proenza", song: "Can We Kiss Forever?"},
// {artist: "P. Susheela", song: "Vinumaa Ramakatha"},
// {artist: "Rema", song: "Lady"},
// {artist: "Lo Jill", song: "Black Magic"}
// ]

// songs.forEach(title => {
//     getSampleAudio(title.song,title.artist)
// })
