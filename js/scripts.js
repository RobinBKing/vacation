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
      //terrain
      var terrain =
      var water =  $("input#waterCheckbox").val();
      var beach =  $("input#beachCheckbox").val();
      var mountains =  $("input#mountainsCheckbox").val();
      var desert =  $("input#desertCheckbox").val();
      //mobileStay
      var mobileStay = $("select#mobileStay").val();
      //accomodations


      //fill classes
      $(".whoElse").text(whoElse);
    }


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
