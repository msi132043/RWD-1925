$(function () {


    $('#water').ripples({
        // Image Url
        imageUrl: null,

        // The width and height of the WebGL texture to render to. 
        // The larger this value, the smoother the rendering and the slower the ripples will propagate.
        resolution: 256,

        // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
        dropRadius: 20,

        // Basically the amount of refraction caused by a ripple. 
        // 0 means there is no refraction.
        perturbance: 0.04,

        // Whether mouse clicks and mouse movement triggers the effect.
        interactive: true,

        // The crossOrigin attribute to use for the affected image. 
        crossOrigin: ''

    })
    /*
        // show the effect
        $('#water').ripples('show');

        // hide the effect
        $('#water').ripples('hide');

        // destroy the plugin
        $('#water').ripples('destroy');

        // play the simulation's state
        $('#water').ripples('play');

        // pause the simulation's state
        $('#water').ripples('pause');

        // add a drop at the element's relative coordinates (x, y). 
        // radius controls the drop's size and strength the amplitude of the resulting ripple.
        $('#water').ripples('drop', x, y, radius, strength);
    */



    new WOW().init();



    //Back to top
    $('#back_to_top').hide();

    $(window).scroll(function () {
        var height = $(this).scrollTop();
        if (height > 150) {
            $('#back_to_top').fadeIn(500);
        } else {
            $('#back_to_top').fadeOut(500);
        }
    });

    $('#back_to_top').click(function () {
        $('html, body').animate({scrollTop: 0}, 2000);
    })
    
//    $('#back_to_top').click(function () {
//        $('html,body').animate({
//            scrollTop: 0,
//        }, 2000)
//    });
    
    
    //PreLoader
    $('#preloader').delay(1500).fadeOut(500);





});
