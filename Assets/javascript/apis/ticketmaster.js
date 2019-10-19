
var concert
function getEvents(artist) {
 $.ajax({
   type: "GET",
   url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=jqljeDC6qh4bmsy6Ebo3TuTS5YGMzOaR&keyword=" + artist,
   async: true,
   dataType: "json",
   success: function (json) {
       console.log(json);
        if(!json._embedded){
            $('.tourEvent').text('No Tour Information Available!');
            $('.tourDate').text('');
            $('.tourSale').text('');
        } else {
            json._embedded.events.forEach(event => {
            concert = {
                name: event.name,
                url: event.url,
                dates: event.dates,
                venues: event._embedded.venues
        }
        $('.tourEvent').html(`<div>Tour Name</div>
                                <div>${concert.name}</div>`);

        $('.tourDate').html(`<div>Date: ${concert.dates.start.localDate} at ${concert.dates.start.localTime}</div>`)

        if(concert.dates.status.code === 'onsale'){
            $('.tourSale').html(`<div>Tickets are still available</div>
                                    <a target=”_blank” href=${concert.url}>${concert.url}</a>`)
                    if(event.priceRanges){
                        if(event.priceRanges[0].min === event.priceRanges[0].max){
                            $('.tourSale').append(`<div>Price: $${event.priceRanges[0].max}</div>`)
                        }else {
                            $('.tourSale').append(`<div>Price Range: $${event.priceRanges[0].min} - $${event.priceRanges[0].max}</div>`)
                        }
                    }
                }

            });
    }},
   error: function (xhr, status, err) {}
 });
}

