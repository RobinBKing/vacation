$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var side = $("select#side").val();
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
