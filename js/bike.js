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
      var stolenLastweek = [];
      response.bikes.forEach(function(bike){
        if(bike.date_stolen > lastWeek) {

            $('#recentList').append("<li>" + bike.title + " "+ bike.date_stolen + "</li>");
            stolenLastweek.push(bike);
            } if(stolenLastweek.length === 0) {
          $('#recentList').text("Nothing has been stolen in the last seven days");
        }
      });
    });
  };

Bike.prototype.showStolenInRange = function(location, startDate, endDate) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=1000&location=' + location + '&distance=10&stolenness=proximity&appid=' + apiKey).then(function(response) {
    console.log(response);
      var start = Date.parse(startDate)/1000;
      var end = Date.parse(endDate)/1000;
      var stolenLastweek = [];
      response.bikes.forEach(function(bike){
        if(bike.date_stolen > start && bike.date_stolen < end) {
          if (bike.large_img === null) {
            $('#inRange').append("<h3>" + bike.title + " Date Stolen: "+ new Date(bike.date_stolen *1000) + "<img src='../../img/no-bike-img.png' >" + "</h3>");
          } else {
            $('#inRange').append("<h3>" + bike.title + " Date Stolen: "+ new Date(bike.date_stolen *1000) + "<img src='" +bike.large_img +"' >" + "</h3>");
            stolenLastweek.push(bike);
            } if(stolenLastweek.length === 0) {
          $('#inRange').text("Nothing has been stolen in the last seven days");
        }
      }
    });
  });
};


exports.bikeModule = Bike;
