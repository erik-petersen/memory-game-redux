$(function() {

  "use strict";

  console.log( "Hello, World!" );

  var clicks = 0;
  var numCorrect = 0;
  var numIncorrect = 0;
  var firstCard = "";
  var secondCard = "";
  var hearts = $( ".fa-heartbeat" );
  var cards = $( ".card" );

  $( "body" ).on( "orientationchange", function () {
    console.log("The orientation of the screen is: " + screen.orientation);
    location.reload();
  });

  $( "main" ).on( "click", ".card", function() {

    clicks++;
    console.log( hearts[0] );
    console.log( clicks );

    $( this ).children().toggle();

    if( clicks === 1 ) {
      firstCard = $( this );
      console.log( "1 click" );
      console.log( firstCard.index() );
    } // end if

    else if( clicks === 2 ) {

      console.log( clicks );

      /********** this if not needed if I get rid of separate divs for each row *********/
      if( $(this).index() == firstCard.index() && $(this).children().attr("class") == firstCard.children().attr("class") ) {
        clicks = 0;
        console.log( "2 clicks if" );
      }

      else {
        secondCard = $( this );
        clicks = 0;
        console.log( "2 clicks else" );

        if( firstCard.children().attr( "class" ) == secondCard.children().attr( "class" ) ) {

          numCorrect++;
          console.log( "They match" );
          firstCard.prop( "disabled", true );
          secondCard.prop( "disabled", true );

          if( numCorrect == 12 ) {
            alert( "Way to go!!!  You Won!!!" );
          } // end if all are correct

        } // end if two cards match

        else {
          numIncorrect++;
          firstCard.children().delay(1500).hide(1);
          secondCard.children().delay(1500).hide(1);
          $( hearts[numIncorrect - 1] ).hide();

          if( numIncorrect == 7 ) {
            alert( "Uffda!!! That did not go well!!!" );

            for( var i = 0; i < cards.length; i++ ) {
              console.log( "Hello" );
              $(cards[i]).prop( "disabled", false );
              $(cards[i]).children().hide();
              $( hearts[i] ).show();
            }

            numIncorrect = 0;

          }
        }
      } // end else if
    }
  }); // end click on .card
})
