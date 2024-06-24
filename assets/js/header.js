
$(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr > 0){
        $('#header .gnb').addClass('on');
    }else {
        $('#header .gnb').removeClass('on');
    }
})

$('#header .btn-member').click(function(){
    $('#header .member-popup').addClass('on');
    $('.dimmed').addClass('on');

})

$('.member-popup .header-mem svg').click(function(){
    $('#header .member-popup').removeClass('on');
    $('.dimmed').removeClass('on');

})


$('#header .btn-menu').click(function(){
    $('#header .menu-popup').addClass('on');
    $('.dimmed').addClass('on');

})

$('.menu-popup .header-menu svg').click(function(){
    $('#header .menu-popup').removeClass('on');
    $('.dimmed').removeClass('on');
})

