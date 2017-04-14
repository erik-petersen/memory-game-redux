$(function() {

  "use strict";

  console.log( "Hello, World!" );

  var clicks = 0;
  var firstCard = "";
  var secondCard = "";

  $( "main" ).on( "click", ".card", function() {

    clicks++;
    console.log( "Card clicked" );

    $( this ).children().toggle();

    if( clicks === 1 ) {
      firstCard = $( this );
      console.log( $(this).index() );
    } // end if

    else if( clicks === 2 ) {

      secondCard = $( this );
      clicks = 0;

      if( firstCard.children().attr( "class" ) == secondCard.children().attr( "class" ) ) {
        firstCard.prop( "disabled", true );
        secondCard.prop( "disabled", true );
        console.log( "They match" );
      }

      else {
        firstCard.children().delay(1500).hide(1);
        secondCard.children().delay(1500).hide(1);
      }
    } // end else if

  }); // end click on .card

})
