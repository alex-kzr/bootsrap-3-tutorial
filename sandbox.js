$('.nav li').on('click', function(){
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
});

$(function(){
    $('.carousel').carousel({
        interval: 2000,
        pause: true,
        wrap: false,
        keyboard: true
    });
});