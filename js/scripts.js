$(document).ready(function() {
  $("form#questions").submit(function(event) {
    //who else
    var whoElse = "";
    if($("input#partnerCheckbox").val()){
      whoElse = $("input#partnerCheckbox").val();
    }
    if($("input#kidsCheckbox").val()){
      if(whoElse != ""){
        whoElse += " and " + $("input#kidAmount").val();
        if(parseInt($("input#kidAmount").val()) > 1){
          whoElse += $("input#kidAmount").val() + " kids "
        }
        else{
          whoElse += " child "
        }
      }
    }

    if(kids){
      $("#kidCount").show();
      var kidAmount = $("input#kidAmount").val();
    }
    var abroadUSA = $("select#abroadUSA").val();
    //abroad
    var abroad = "";
    if (abroadUSA === "abroad"){
      $("#travelAbroad").show();
      if($("input#europe").val()){
        abroad = $("input#europe").val();
      }
      else if($("input#africa").val()){
        abroad = $("input#africa").val();
      };
      else if($("input#asia").val()){
        abroad = $("input#asia").val();
      };
      else if($("input#middleEast").val()){
        abroad = $("input#middleEast").val();
      };
      else if($("input#southAmerica").val()){
        abroad = $("input#southAmerica").val();
      };
      //mobileStay
      var mobileStay = $("select#mobileStay").val();
      //accomodations
      var accomodations = "";
      if($("input#plush") || $("input#reasonable")){
        if($("select#mobileStay").val(); === "mobile"){
          accomodations = " on a cruise "
        }
        else {
          accomodations = " at a resort "
        }
      }
      else if{$("input#budget")){
        if($("select#mobileStay").val(); === "mobile"){
          accomodations = " in an RV "
        }
        else {
          accomodations = " in a cabin "
        }
        else if{$("input#rustic"){
          accomodations = " in a tent "
          }
      }
      //activities
      var activities = "";
      if($("input#hikingCheckbox")){
        activities = "hiking";
      }
      if($("input#swimmingCheckbox")){
        if(activities != ""){
          activities += " and swimming"
        }
        else {
          activities = "swimming"
        }
      }
      if($("input#fishingCheckbox")){
        if(activities != ""){
          activities += " and fishing"
        }
        else {
          activities = "fishing"
        }
      }
      if($("input#golfingCheckbox")){
        if(activities != ""){
          activities += " and golfing"
        }
        else {
          activities = "golfing"
        }
      }
      if($("input#zipCheckbox")){
        if(activities != ""){
          activities += " and riding a zipline"
        }
        else {
          activities = "riding a zipline"
        }
      }
      if($("input#horsebackCheckbos")){
        if(activities != ""){
          activities += " and horseback ridding"
        }
        else {
          activities = "horseback ridding"
        }
      }
      if($("input#relaxingCheckbox")){
        if(activities != ""){
          activities += " and relaxing"
        }
        else {
          activities = "relaxing"
        }
      }
      //terrain
      var terrain = "";
      if($("input#waterCheckbox").val()){
        terrain = " on the water"
      }
      if($("input#beachCheckbox").val()){
        if(terrain ! = ""){
          terrain += " and on the beach";
        }
        else {
          terrain = "on the beach"
        }
      }
      if($("input#mountainsCheckbox").val()){
        if(terrain ! = ""){
          terrain += " and in the mountains";
        }
        else {
          terrain = "in the mountains"
        }
      }
      if($("input#desertCheckbox").val()){
        if(terrain ! = ""){
          terrain += " and in the desert";
        }
        else {
          terrain = "in the desert"
        }
      }
      //weather
      //weather
      var weather = "";
      if($("input#hotHumid").val()){
        weather = $("input#hotHumid").val();
      }
      else if($("input#coolMoist").val()){
        weather = $("input#coolMoist").val();
      };
      else if($("input#africa").val()){
        weather = $("input#africa").val();
      };
      else if($("input#hotDry").val()){
        weather = $("input#hotDry").val();
      };
      else if($("input#coldCrisp").val()){
        weather = $("input#coldCrisp").val();
      };

      //fill classes
      $(".whoElse").text(whoElse);
      $(".accomodations").text(accomodations);
      $(".activity").text(activity);
      $(".terrain").text(terrain);
      $(".weather").text(weather);      }


    var humanNon = $("select#humanNon").val();
    var gender = $("select#genderPreference").val();
    var force = $("select#force").val();

    if (side === "dark") {
      $("#vader").show();
    }
    else {
      if (humanNon === 'human' && gender === 'male' && force === 'theForce') {
        $("#luke").show();
        $(".theForce").show();
      }
      if (humanNon === 'human' && gender === 'male' && force === 'brute') {
        $("#han").show();
        $(".bruteForce").show();
      }
      if (humanNon === 'human' && gender === 'female' && force === 'theForce') {
        $("#rey").show();
        $(".theForce").show();
      }
      if (humanNon === 'human' && gender === 'female' && force === 'brute') {
        $("#leia").show();
        $(".bruteForce").show();
      }
      if (humanNon === 'non' && force === 'theForce') {
        $("#yoda").show();
        $(".theForce").show();
      }
      if (humanNon === 'non' && force === 'brute') {
        $("#chewy").show();
        $(".bruteForce").show();
      }
      if (humanNon === 'human' && gender === 'either' && force === 'theForce') {
        $("#luke").show();
        $("#rey").show();
        $(".theForce").show();
      }
      if (humanNon === 'human' && gender === 'either' && force === 'brute') {
        $("#han").show();
        $("#leia").show();
        $(".bruteForce").show();
      }
    };
    //
    // $("#result").show();
    event.preventDefault();
  });
});
