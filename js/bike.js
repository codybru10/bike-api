var apiKey = require('./../.env').apiKey;

function Bike() {}

Bike.prototype.getStolen = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=10&stolenness=proximity&appid=' + apiKey).then(function(response) {
    console.log(response);
      debugger;
    console.log("hello");
    $('#showBikes').text("These are the bikes stolen nearby " +location+ ": " + response.bikes.length);
    debugger;
    console.log("hello");

  });
};

exports.bikeModule = Bike;
