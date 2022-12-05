//aside
$(function(){

    $('.header .btn-category').click(function(e){ //e -> 이벤트
        e.preventDefault(); //링크이벤트 막기

        $('.side-menu').addClass('on');
        $('body').addClass('hidden');
        
     })

     $('body').click(function(e){
        // console.log(e.target); 특정영역제외 클릭(자바스크립트)

        if($(e.target).has('.side-menu').length){
            $('body').removeClass('hidden');
            $('.side-menu').removeClass('on');
        }
     })

     $('.btn-close').click(function(e){ //e -> 이벤트
        e.preventDefault(); //링크이벤트 막기
        $('body').removeClass('hidden');
        $('.side-menu').removeClass('on');
     })


    //gnb-전체메뉴
    $('#allMenu').click(function (e) { 
        e.preventDefault();
        $('.header .group-all').stop().slideToggle();
        $(this).toggleClass('on');

    });

//aside 아코디언

    $('.side-menu .nav').click(function(e){
        e.preventDefault();

        $(this).siblings().stop().slideToggle();
        $(this).toggleClass('on')
        
        
    })

    // header fixed 스크롤
    let lastScroll = 0; //초기화
    $(window).scroll(function(){
        const current = $(this).scrollTop();
        
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }   

        

        if(current > lastScroll){ //내릴때
            $('.quick').removeClass('show')
        }else{ //올릴때
            $('.quick').addClass('show')
        }

        lastScroll = current

        if (current < 10) {
            $('.quick').removeClass('show')
        } else {
            
        }


    })
    $(window).trigger('scroll');
    // 한번 스크롤 강제로


    

// top banner
setInterval(function(){
    $('.sc-topBanner .banner-wrap > .banner-slide:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.banner-wra');
},5000);

// 
const bannerSlide = new Swiper(".sc-banner", {
    loop:true,
    speed: 500, //페이드 속도
    effect: 'fade', 
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
});





// 메인 비주얼 슬라이드

    const visual = new Swiper(".visual", {
        pagination: {
          el: ".swiper-pagination",
        },
        effect: 'fade',
        loop:true,
        autoplay:{
            delay:3000,
        },


    });


// 상품 슬라이드(레깅스,브라탑,세트)

    const proslide = new Swiper(".sc-cate .swiper", {
        slidesPerView:2.1,
        spaceBetween:10,
        freeMode:true,
        // 슬라이드 자유롭게
    });












//상단이동 클릭
//제이쿼리 이벤트를 자바스크립트로 해봄
    const topBtnElement = document .querySelector('.btn-top');

    topBtnElement.addEventListener('click',()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    })
});
