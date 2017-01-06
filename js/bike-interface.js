 var apiKey = require('./../.env').apiKey;
 var Bike = require('./../js/bike.js').bikeModule;
 var appId = require('./../.env').appId;
$(document).ready(function(){
  var test_bike = new Bike();
  $("#locationForm").submit(function(event){
    event.preventDefault();
    $("#inRange").hide();
    var location = $('#location').val();
    test_bike.showStolen(location);
    test_bike.getStolen(location);
    test_bike.justStolen(location);
    $("#showBikes").show();
    $("#bikeList").show();
    $("#recentList").show();
  });


  $('#dateForm').submit(function(event){
    event.preventDefault();
    $("#showBikes").hide();
    $("#bikeList").hide();
    $("#recentList").hide();
    var location = $('#location2').val();
    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();
    test_bike.showStolenInRange(location, startDate, endDate);
      $("#inRange").show();
  });
});
