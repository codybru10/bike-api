var apiKey = require('./../.env').apiKey;

function Bike() {}

Bike.prototype.getStolen = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=1000&location=' + location + '&distance=10&stolenness=proximity').then(function(response) {
    console.log(response);

    $('#showBikes').text("These are the bikes stolen nearby " +location+ ": " + response.bikes.length);

  });
};

Bike.prototype.showStolen = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=1000&location=' + location + '&distance=10&stolenness=proximity&appid=' + apiKey).then(function(response) {
    console.log(response);
      response.bikes.forEach(function(bike){
        $('#bikeList').append("<li>" + bike.title + "</li>");
      });

  });
};

Bike.prototype.justStolen = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=1000&location=' + location + '&distance=10&stolenness=proximity&appid=' + apiKey).then(function(response) {
    console.log(response);
      var today = new Date();
      var lastWeek = today.setDate(today.getDate()-7);
      var lastWeek = lastWeek / 1000;
      response.bikes.forEach(function(bike){
        if(bike.date_stolen > lastWeek) {
          console.log("WAHHT");
            $('#recentList').append("<li>" + bike.title + " "+ bike.date_stolen + "</li>");
        } else {
          $('#recentList').text("Nothing has been stolen in the last 7 days");
      };
    });
  });
};


exports.bikeModule = Bike;
