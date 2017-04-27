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

  window.addEventListener("orientationchange", function() {
      // alert("the orientation of the device is now " + screen.orientation.angle);
      location.reload();
  });

  $( "main" ).on( "click", ".card", function() {

    clicks++;

    console.log( hearts[0] );
    console.log( clicks );

    if( clicks === 1 ) {
      $( this ).css( "transform", "rotateY( 180deg )" );
      $( this ).css( "-webkit-transform", "rotateY( 180deg )" );
      $( this ).children().css( "visibility", "visible" );
      firstCard = $( this );
      console.log( "1 click" );
      console.log( firstCard.index() );
    } // end if

    else if( clicks === 2 ) {

      if( $(this).index() == firstCard.index() ) {
        $( this ).css( "transform", "rotateY( 0deg )" );
        $( this ).css( "-webkit-transform", "rotateY( 0deg )" );
        $( this ).children().css( "visibility", "hidden" );
      } // end if click on same card

      else {
        $( this ).css( "transform", "rotateY( 180deg )" );
        $( this ).css( "-webkit-transform", "rotateY( 180deg )" );
        $( this ).children().css( "visibility", "visible" );
      } // end if click on different card

      console.log( clicks );

      /********** this is not needed if I get rid of separate divs for each row *********/
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
          console.log( "Number Correct" );
          // console.log( numCorrect );
          firstCard.prop( "disabled", true );
          secondCard.prop( "disabled", true );

          if( $( location ).attr( "href", "https://erik-petersen.github.io/memory-game-redux/pages/easy.html" ) ) {

            if( numCorrect == 1 ) {
              alert( "Way to go!!!  You Won!!!" );
              numCorrect = 0;
              for( var i = 0; i < cards.length; i++ ) {
                console.log( "Hello" );
                $(cards[i]).prop( "disabled", false );
                $(cards[i]).children().hide();
                $( hearts[i] ).show();
              }
            } // end if all are correct

          } // end if on easy.html

          else {

            if( numCorrect == 12 ) {
              alert( "Way to go!!!  You Won!!!" );
              numCorrect = 0;
              for( var i = 0; i < cards.length; i++ ) {
                console.log( "Hello" );
                $(cards[i]).prop( "disabled", false );
                $(cards[i]).children().hide();
                $( hearts[i] ).show();
              }
            } // end if all are correct

          } // end if on hard.html

        } // end if two cards match

        else {
          numIncorrect++;
          setTimeout( function() { firstCard.children().css( "visibility", "hidden" ) }, 1000 );
          setTimeout( function() { secondCard.children().css( "visibility", "hidden" ) }, 1000 );
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
