var concert

function getEvents(artist) {
  $.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=jqljeDC6qh4bmsy6Ebo3TuTS5YGMzOaR&keyword=" + artist,
    async: true,
    dataType: "json",
    success: function (json) {
      json._embedded.events.forEach(event => {
        console.log(event)
        concert = {
          name: event.name,
          url: event.url,
          dates: event.dates,
          venues: event._embedded.venues
        }
      });
    },
    error: function (xhr, status, err) { }
  });
}
