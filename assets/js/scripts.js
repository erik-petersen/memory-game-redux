$(function() {

  "use strict";

  console.log( "Hello, World!" );

  var clicks = 0;
  var firstCardClass = "";
  var secondCardClass = "";

  $( "main" ).on( "click", ".card", function() {

    clicks++;
    console.log( "Card clicked" );

    // if clicked card's icon is hidden, display it
    // if( $( this ).children().is( ":hidden" ) ) {
    //   $( this ).children().show();
    // }
    $( this ).children().toggle();

    if( clicks === 1 ) {
      firstCardClass = $( this ).children().attr( "class" );
      console.log( "Click on " + firstCardClass );
    } // end if

    else if( clicks === 2 ) {
      secondCardClass = $( this ).children().attr( "class" );
      console.log( "Click on " + secondCardClass );
      clicks = 0;
    } // end else if

    else {

    } // end else


  }); // end click on .card

})
