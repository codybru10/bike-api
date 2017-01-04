 var apiKey = require('./../.env').apiKey;
 var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  var test_bike = new Bike();
  $("#locationForm").submit(function(event){
    event.preventDefault();
    var location = $('#location').val();
    test_bike.getStolen(location);
    $('#showBikes').text("Here are the bikes in " + location + ":")

  })

});
