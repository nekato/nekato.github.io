$(document).ready(function(){
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 150) {
            $('.navbar').addClass('sisa');
        } else {
            $('.navbar').removeClass('sisa');
        }
    });

    $('body').scrollspy({target: ".navbar", offset: 50});

    $(".navbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 0
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
    });

    $('.nav li a').on('click',function(){
        $('.navbar-collapse.in').collapse('hide');
    })
});
