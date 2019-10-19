function getEvents(artist) {
  $.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=jqljeDC6qh4bmsy6Ebo3TuTS5YGMzOaR&keyword=" + artist,
    async: true,
    dataType: "json",
    success: function (json) {
      json._embedded.attractions.forEach(event => {
        console.log(event.upcomingEvents._total)
      });
      // Parse the response.
      // Do other things.
    },
    error: function (xhr, status, err) {
      // This time, we do not end up here!
    }
  });
}
