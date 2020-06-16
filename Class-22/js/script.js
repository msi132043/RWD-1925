$(function () {
    $('.count').counterUp({
        delay: 50,
        time: 2500
    });


    $('.countdown-month').countdown('2021/01/01 00:00', function (event) {
        $('.countdown-month').html(event.strftime('%-m'));
        $('.countdown-days').html(event.strftime('%-n'));
        $('.countdown-hours').html(event.strftime('%H'));
        $('.countdown-minutes').html(event.strftime('%M'));
        $('.countdown-seconds').html(event.strftime('%S'));
    });







});
