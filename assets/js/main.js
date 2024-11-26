

//sc-promo
const mainSlide = new Swiper('.sc-promo .swiper', {

    slidesPerView: 1,	
    loop: true,	
    autoplay: {
        delay: 3000,	
        disableOnInteraction: false
    },
    effect: 'slide', // slide, fade, cube, coverflow, flip
    speed: 500,
    
    pagination:{
        el:".pagination",
        clickable: true
    },

    navigation:{
        nextEl:".btn-next",
        prevEl:".btn-prev"
    },

    });
    
    $('.sc-promo .swiper-pagination-bullet').click(function () {
        var $this = $(this);
        var num = $this.closest('sc-promo .swiper .swiper-slide');
        var index = Idx.index();
        mainSlide.slideToLoop($(this.index()));
    });


$('.sc-promo').mouseover(function(){
   $('.sc-promo .btn-next, .sc-promo .btn-prev').addClass('on');
})
$('.sc-promo').mouseout(function(){
   $('.sc-promo .btn-next, .sc-promo .btn-prev').removeClass('on');
})



//sc-now
const nowSlide = new Swiper('.sc-now .swiper', {

    slidesPerView: 'auto',	
    loop: false,
    slidesPerGroup : 3,

    navigation:{
        nextEl:".sc-now .scroll-next",
        prevEl:".sc-now .scroll-prev"
    }
});

$('.sc-now').mouseover(function(){
    $('.sc-now button').addClass('on');
})
$('.sc-now').mouseout(function(){
    $('.sc-now button').removeClass('on');
})



// sc-live
const liveSlide = new Swiper('.sc-live .swiper', {

    slidesPerView: 'auto',	
    loop: false,
    slidesPerGroup : 3,

    navigation:{
        nextEl:".sc-live .scroll-next",
        prevEl:".sc-live .scroll-prev"
    }
});

$('.sc-live').mouseover(function(){
    $('.sc-live button').addClass('on');
})
$('.sc-live').mouseout(function(){
    $('.sc-live button').removeClass('on');
})



// sc-original
const originalSlide = new Swiper('.sc-original .swiper', {

    slidesPerView: 'auto',	
    loop: false,
    slidesPerGroup : 2,

    navigation:{
        nextEl:".sc-original .scroll-next",
        prevEl:".sc-original .scroll-prev"
    }
});

$('.sc-original').mouseover(function(){
    $('.sc-original button').addClass('on');
})
$('.sc-original').mouseout(function(){
    $('.sc-original button').removeClass('on');
})



//sc-banner 
const cardSlide = new Swiper('.sc-banner .swiper', {

    slidesPerView: 1,	
    loop: true,	
    autoplay: {
        delay: 4000,	
        disableOnInteraction: false
    },
    effect: 'slide', // slide, fade, cube, coverflow, flip
    speed: 500,

    navigation:{
        nextEl:".btn-next",
        prevEl:".btn-prev"
    },
    pagination: {
        el:".pagination",
        clickable: true
    }
})

$('.sc-banner').mouseover(function(){
    $('.sc-banner button').addClass('on');
})
$('.sc-banner').mouseout(function(){
    $('.sc-banner button').removeClass('on');
})



//sc-video

$('.sc-video .tab-list button').click(function(){

    tabName = $(this).data('tab')

    $('.sc-video .tab-list button').removeClass('selected');
    $(this).addClass('selected');

    $(tabName).addClass('selected').siblings().removeClass('selected');

})

$('.sc-video').mouseover(function(){
    $('.sc-video button').addClass('on');
})
$('.sc-video').mouseout(function(){
    $('.sc-video button').removeClass('on');
})

const vidSlide = new Swiper('.sc-video #tab1 .swiper', {

    slidesPerView: 'auto',	
    loop: false,
    slidesPerGroup : 2,

    navigation:{
        nextEl:".sc-video #tab1 .scroll-next",
        prevEl:".sc-video #tab1 .scroll-prev"
    }
});

const vid2Slide = new Swiper('.sc-video #tab2 .swiper', {

    slidesPerView: 'auto',	
    loop: false,
    slidesPerGroup : 2,

    navigation:{
        nextEl:".sc-video #tab2 .scroll-next",
        prevEl:".sc-video #tab2 .scroll-prev"
    }
});

//sc-magazine
const magazineSlide = new Swiper('.sc-magazine .swiper', {

    slidesPerView: 'auto',	
    loop: false,
    slidesPerGroup : 2,

    navigation:{
        nextEl:".sc-magazine .scroll-next",
        prevEl:".sc-magazine .scroll-prev"
    }
});

$('.sc-magazine').mouseover(function(){
    $('.sc-magazine button').addClass('on');
})
$('.sc-magazine').mouseout(function(){
    $('.sc-magazine button').removeClass('on');
})
