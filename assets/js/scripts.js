$( function() {

  "use strict";

  var clicks = 0;
  var numCorrect = 0;
  var numIncorrect = 0;
  var firstCard = "";
  var secondCard = "";
  var hearts = $( ".fa-heartbeat" );
  var cards = $( ".card" );

  window.addEventListener("orientationchange", function() {
      // alert( "the orientation of the device is now " + screen.orientation.angle );
      location.reload();
  });

  $( document ).scrollTop( 0 );

  $( "main" ).on( "click", ".card", function() {

    clicks++;

    $( this ).css( "transform", "rotateY( 180deg )" );
    $( this ).css( "-webkit-transform", "rotateY( 180deg )" );
    $( this ).css( "-webkit-transform", "translateY( 180deg )" );
    $( this ).css( "-ms-transform", "rotateY( 180deg )" );
    $( this ).css( "-moz-transform", "rotateY( 180deg )" );
    $( this ).css( "-o-transform", "rotateY( 180deg )" );
    $( this ).children().css( "visibility", "visible" );

    if( clicks === 1 ) {

      firstCard = $( this );

    } // end if clicks == 1

    else if( clicks === 2 ) {

      secondCard = $( this );

      // if the same exact card is clicked again
      if( secondCard.index() == firstCard.index() ) {

        $( this ).css( "transform", "rotateY( 0deg )" );
        $( this ).css( "-webkit-transform", "rotateY( 0deg )" );
        $( this ).css( "-webkit-transform", "translateY( 0deg )" );
        $( this ).css( "-ms-transform", "rotateY( 0deg )" );
        $( this ).css( "-moz-transform", "rotateY( 0deg )" );
        $( this ).css( "-o-transform", "rotateY( 0deg )" );
        $( this ).children().css( "visibility", "hidden" );

        clicks = 0;

      } // end if click on same card

      // if a different card is clicked
      else {

      // if second card is correct match
      if( firstCard.children().attr( "class" ) == secondCard.children().attr( "class" ) ) {

          numCorrect++;

          firstCard.prop( "disabled", true );
          secondCard.prop( "disabled", true );

          // if( $( location ).attr( "href" ) == "http://localhost:3000/pages/easy.html" && numCorrect == 1 ) {
          if( $( location ).attr( "href" ) == "https://erik-petersen.github.io/memory-game-redux/pages/easy.html" && numCorrect == 1 ) {

                $( ".modal-btn" ).trigger( "click" );
                $( "#myModal" ).css( "visibility", "visible" );

              numCorrect = 0;

              for( var i = 0; i < cards.length; i++ ) {
                $( cards[i] ).prop( "disabled", false );
                $( cards[i] ).css( "transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-webkit-transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-webkit-transform", "translateY( 0deg )" );
                $( cards[i] ).css( "-ms-transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-moz-transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-o-transform", "rotateY( 0deg )" );
                $( cards[i] ).children().css( "visibility", "hidden" );
                $( hearts[i] ).show();
              }

          } // end if on easy.html

          // else if( $( location ).attr( "href" ) == "http://localhost:3000/pages/hard.html" && numCorrect == 12 ) {
          else if( $( location ).attr( "href" ) == "https://erik-petersen.github.io/memory-game-redux/pages/hard.html" && numCorrect == 12 ) {

            if( numCorrect == 12 ) {

              alert( "Way to go!!!  You Won!!!" );

              numCorrect = 0;

              for( var i = 0; i < cards.length; i++ ) {
                $( cards[i] ).prop( "disabled", false );
                $( cards[i] ).css( "transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-webkit-transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-webkit-transform", "translateY( 0deg )" );
                $( cards[i] ).css( "-ms-transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-moz-transform", "rotateY( 0deg )" );
                $( cards[i] ).css( "-o-transform", "rotateY( 0deg )" );
                $( cards[i] ).children().css( "visibility", "hidden" );
                $( hearts[i] ).show();
              }

            } // end if all are correct

          } // end if on hard.html

        } // end if two cards match

        // if second card is not correct match
        else {
          numIncorrect++;

          setTimeout( function() { firstCard.children().css( "visibility", "hidden" ) }, 1000 );
          setTimeout( function() { secondCard.children().css( "visibility", "hidden" ) }, 1000 );

          setTimeout( function() { firstCard.css( "transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { firstCard.css( "-webkit-transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { firstCard.css( "-webkit-transform", "translateY( 0deg )" ) }, 1000 );
          setTimeout( function() { firstCard.css( "-ms-transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { firstCard.css( "-o-transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { secondCard.css( "transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { secondCard.css( "-webkit-transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { secondCard.css( "-webkit-transform", "translateY( 0deg )" ) }, 1000 );
          setTimeout( function() { secondCard.css( "-moz-transform", "rotateY( 0deg )" ) }, 1000 );
          setTimeout( function() { secondCard.css( "-o-transform", "rotateY( 0deg )" ) }, 1000 );

          $( hearts[numIncorrect - 1] ).hide();

          if( numIncorrect == 7 ) {
            alert( "Uffda!!! That did not go well!!!" );

            for( var i = 0; i < cards.length; i++ ) {
              $( cards[i] ).prop( "disabled", false );
              $( cards[i] ).css( "transform", "rotateY( 0deg )" );
              $( cards[i] ).css( "-webkit-transform", "rotateY( 0deg )" );
              $( cards[i] ).css( "-webkit-transform", "translateY( 0deg )" );
              $( cards[i] ).css( "-ms-transform", "rotateY( 0deg )" );
              $( cards[i] ).css( "-moz-transform", "rotateY( 0deg )" );
              $( cards[i] ).css( "-o-transform", "rotateY( 0deg )" );
              $( cards[i] ).children().css( "visibility", "hidden" );
              $( hearts[i] ).show();
            }

            numIncorrect = 0;
            numCorrect = 0;

          }
        }

      clicks = 0;

      } // end if click on different card
    } // end if clicks == 2
  }); // end click on .card
})
