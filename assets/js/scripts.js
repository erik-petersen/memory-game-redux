$(function() {

  "use strict";

  console.log( "Hello, World!" );

  var clicks = 0;
  var numCorrect = 0;
  var numIncorrect = 0;
  var firstCard = "";
  var secondCard = "";
  var hearts = $( ".fa-heartbeat" );

  $( "main" ).on( "click", ".card", function() {

    clicks++;
    console.log( hearts );

    $( this ).children().toggle();

    if( clicks === 1 ) {
      firstCard = $( this );
      console.log( "1 click" );
    } // end if

    else if( clicks === 2 ) {

      console.log( clicks );
      if( $(this).index() == firstCard.index() ) {
        clicks = 0;
      }

      else {
        secondCard = $( this );
        clicks = 0;

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
          }
        }
      } // end else if
  }
  }); // end click on .card

})
