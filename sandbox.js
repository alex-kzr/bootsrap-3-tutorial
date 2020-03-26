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

$(function(){
    $('[data-toogle="tooltip"]').tooltip();
});

$('#mymodal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
});