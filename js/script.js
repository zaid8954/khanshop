$('#slider-1.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false, 
    smartSpeed: 1300,
    navText:["<span class='fas fa-chevron-left'></span>", "<span class='fas fa-chevron-right'></span>"],
    
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },

        768:{
            items:2
        },

        992:{
            items:2
        },

        1000:{
            items:3
        }
    }
})

