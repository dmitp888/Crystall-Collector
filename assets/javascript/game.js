      // The random number shown at the start of the game should be between 19 - 120
      var targetscore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      var counter = 0;
      var wins = 0;
      var losses = 0;
      var update = function() {
        targetscore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        counter = 0;
        $("#targetscore").text(targetscore);
      };

      $("#targetscore").text(targetscore);

      //  Creating multiple crystals each with their own unique number value.
      // creating array to include four options.
      var numberOptions = [];
      console.log(numberOptions);

      // Next we create a for loop to create crystals for every numberOption.
      for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        numberOptions.push(random);
        console.log("random # :" + random);

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
        imageCrystal.attr("src", "assets/images/" + i + ".png");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
      }

      $(".crystal-image").on("click", function() {
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        console.log("crystalValue: " + crystalValue);
        console.log("counter: " + counter);
        $("#totalscore").text("Your total score is: " + counter);

        if (counter === targetscore) {
          wins++;
          console.log("wins" + wins);

          $("#wins").text("wins: " + wins);
          update();
        } else if (counter >= targetscore) {
          losses++;
          console.log("losses:" + losses);
          $("#losses").text("losses: " + losses);
          update();
        }
      });
