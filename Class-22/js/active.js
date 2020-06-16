(function ($) {
    'use strict';

    $('.html').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#3725bc',
        backgroundColor: 'rgba(55, 37, 188, 0.3)',
        duration: 2000,
    });
    
    $('.css').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#f1c40f',
        backgroundColor: 'rgba(241, 196, 15, 0.3)',
        duration: 2000,
    });


    $('.javascript').rProgressbar({
        percentage: 50,
        fillBackgroundColor: '#34495e',
        backgroundColor: 'rgba(52, 73, 94, 0.3)',
        duration: 2000,
    });

})(jQuery);
