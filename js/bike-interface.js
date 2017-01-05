 var apiKey = require('./../.env').apiKey;
 var Bike = require('./../js/bike.js').bikeModule;
 var appId = require('./../.env').appId;
$(document).ready(function(){
  // $.post('https://bikeindex.org/oauth/token?grant_type=refresh_token&client_id='+ appId +'&refresh_token={refresh_token}');
  var test_bike = new Bike();
  $("#locationForm").submit(function(event){
    event.preventDefault();
    var location = $('#location').val();
    test_bike.showStolen(location);
    test_bike.getStolen(location);
    test_bike.justStolen(location);
  $('#dateButton').click(function(){
    debugger;
    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();
    test_bike.showStolenInRange(location, startDate, endDate)
    });
  });






});
