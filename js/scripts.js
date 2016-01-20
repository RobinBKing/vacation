$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    //who else
    var partner = $("input#partnerCheckbox").prop('checked');
    var kids = $("input#kidsCheckbox").prop('checked');
    var kidCount = $("input#kidCount").val();
    var whoElse = "";
    var accomodations = "";
    var abroadUSA = $("select#abroadUSA").val();
    var abroad = "";
    var mobileStay = $("select#mobileStay").val();
    var plush = $("input#plush").is(':checked');
    var reasonable = $("input#reasonable").is(':checked');
    var budget = $("input#budget").is(':checked');
    var rustic = $("input#rustic").is(':checked');
    var activity = [];
    var terrain = "";
    var weather = "";

    if(partner){
      whoElse = "spouse/partner";
    }
    if(kids){
      if(whoElse != ""){
        whoElse += " and ";
        if(parseInt(kidCount) > 1){
          whoElse += kidCount + " kids ";
        }
        else{
          whoElse += " child ";
        }
      }
    }

    //abroad
    var location = "";
    if (abroadUSA === "abroad"){
      if($("input#europe").is(':checked')){
        location = $("input#europe").val();
      }
      else if($("input#africa").is(':checked')){
        location = $("input#africa").val();
      }
      else if($("input#middleEast").is(':checked')){
        location = $("input#middleEast").val();
      }
      else if($("input#asia").is(':checked')){
        location = $("input#asia").val();
      }
      else if($("input#southAmerica").is(':checked')){
        location = $("input#southAmerica").val();
      }
    }
    else {
      location = "USA";
    };

    //accomodations
    if(plush || reasonable){
      if(mobileStay === "mobile"){
        accomodations = " on a cruise "
      }
      else {
        accomodations = " at a resort "
      }
    }
    else if(budget){
      if(mobileStay === "mobile"){
        accomodations = " in an RV "
      }
      else {
        accomodations = " in a cabin "
      }
    }
    else if(rustic){
        accomodations = " in a tent "
    }

    //activities
    // if($("input#hikingCheckbox").prop('checked')){
    //   activity.push("hiking");
    //   alert(activity.length);
    // }
    // if($("input#swimmingCheckbox").prop('checked')){
    //   activity.push("swimming");
    // }
    // if($("input#fishingCheckbox")){
    //    activity.push("fishing");
    // }
    // if($("input#golfingCheckbox")){
    //   activity.push("golfing");
    // }
    // if($("input#zipCheckbox")){
    //   activity.push("riding a zipline");
    // }
    // if($("input#horsebackCheckbos")){
    //   activity.push("horseback ridding"
    // }
    // if($("input#relaxingCheckbox")){
    //   activity.push("relaxing");
    // }
    // var activities = activity[0];
    //
    // if(activity.length > 1){
    //   for (i = 1; i < activity.length; i++) {
    //     activities += " and " + activity[i];
    //   }
    // }
    //   //terrain
    //   var terrain = "";
    //   if($("input#waterCheckbox").val()){
    //     terrain = " on the water"
    //   }
    //   if($("input#beachCheckbox").val()){
    //     if(terrain ! = ""){
    //       terrain += " and on the beach";
    //     }
    //     else {
    //       terrain = "on the beach"
    //     }
    //   }
    //   if($("input#mountainsCheckbox").val()){
    //     if(terrain ! = ""){
    //       terrain += " and in the mountains";
    //     }
    //     else {
    //       terrain = "in the mountains"
    //     }
    //   }
    //   if($("input#desertCheckbox").val()){
    //     if(terrain ! = ""){
    //       terrain += " and in the desert";
    //     }
    //     else {
    //       terrain = "in the desert"
    //     }
    //   }
    //   //weather
    //   var weather = "";
    //   if($("input#hotHumid").val()){
    //     weather = $("input#hotHumid").val();
    //   }
    //   else if($("input#coolMoist").val()){
    //     weather = $("input#coolMoist").val();
    //   };
    //   else if($("input#africa").val()){
    //     weather = $("input#africa").val();
    //   };
    //   else if($("input#hotDry").val()){
    //     weather = $("input#hotDry").val();
    //   };
    //   else if($("input#coldCrisp").val()){
    //     weather = $("input#coldCrisp").val();
    //   };

    //fill classes
    $(".location").text(location);
    $(".whoElse").text(whoElse);
    $(".accomodations").text(accomodations);
    // $(".activity").text(activities);
    // $(".terrain").text(terrain);
    // $(".weather").text(weather);

    $(".result").show();
    event.preventDefault();
  });
});
