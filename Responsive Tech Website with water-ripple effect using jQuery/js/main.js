$(document).ready(function(){
    "user strict"
    // =================Rippled Effect==================//
    $(".slider").ripples({  
        resolution: 650,
        dropRadius: 10,
        interactive: true,
        perturbance: 0.01,
     });

     $(".slider").ripples('drop', 3, 3, 3, .1)

// =================Typed Animation==================//
    var typed = new Typed(".typed2", {
        strings: [
            "Code",
            "Program",
            "Develop",
            "Design"
        ],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });    

// =================Magnific Popup==================//
    $('.work-section').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
        }
        // other options
      });

    // =================CounterUp==================//
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //==============Smooth Scroll===============//

    $(function(){
        $("a.smooth-scroll").click(function(event){
            event.preventDefault();
            var section = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(section).offset().top - -2
            }, 700, "easeInOutExpo");
        });
    });
})

// =================Owl Carousel==================//
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 3,
        autoplay: true,
        smartSpeed: 550,
        margin:10,
        responsiveClass:true, 
            responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            768:{
                items:2,
                loop:true
            },
            1000:{
                items:3,
                loop:true
            }
        } 
    });
})

$(document).ready(function(){
    $(".slider").ripples('drop', 3, 3, 3, .1)
})