//makes apis calls when new song button is pressed
$('#newSong').on('click',function(){
    $('.tourEvent').text('');
    $('.tourDate').text('');
    $('.tourSale').text('');
    callGenius();
})

