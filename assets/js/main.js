//aside
$(function(){

    /**
     * @사이드메뉴오픈
     * function(e) -> 이벤트
     * e.preventDefault -> 링크 이벤트 막기
     */
    $('.header .btn-category').click(function(e){
        e.preventDefault();

        $('.side-menu').addClass('on');
        $('body').addClass('hidden');
        
     })

    /**
     * @특정영역제외클릭
     * (e.target) -> 특정영역제외 클릭(자바스크립트)
     * .length -> 배열의 길이
     */
     $('body').click(function(e){

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


    /**
     * @gnb메뉴더보기클릭
     * slideToggle() -> 요소가 위아래로 나타나거나 사라지는 방식
     */
    $('#allMenu').click(function (e) { 
        e.preventDefault();
        $('.header .group-all').stop().slideToggle();
        $(this).toggleClass('on');
        $('.group-gnb > .title').toggleClass('on');

    });


    /**
     * @사이드메뉴아코디언
     * $(this).siblings() -> 상위태그(.nav)의 형제
     */
    $('.side-menu .nav').click(function(e){
        e.preventDefault();

        $(this).siblings().stop().slideToggle();
        $(this).toggleClass('on')
        
        
    })

    /**
     * @header스크롤
     * $(this).scrollTop -> 상위태그의 스크롤이 0보다 높을 때
     * current > lastScroll : 현재스크롤값이 마지막스크롤(0)보다 높을때
     * $(window)trigger('scroll') -> 강제로 한번 스크롤한다는 의미
     */
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


    /**
     * @topbanner슬라이드
     * speed -> 슬라이드 넘어가는 속도
     */
    const bannerSlide = new Swiper(".sc-banner", {
        loop:true,
        speed: 500,
        effect: 'fade', 
        autoplay:{
            delay:3000,
            disableOnInteraction: false,
        },
    });



    /**
     * @메인비주얼슬라이드
     * effect:fade -> 슬라이드 넘어갈때 페이드효과
     */
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


    /**
     * @상품슬라이드
     * freeMode -> 슬라이드 자유롭게 넘기기
     */
    const proslide = new Swiper(".sc-cate .swiper", {
        slidesPerView:2.1,
        spaceBetween:10,
        freeMode:true,
    });



    /**
     * @상단스크롤버튼
     * jQuery이벤트를 JavaScript로 해보기
     * querySelector -> 특정 name,id,class를 제한하지 않고 css선택자를 사용하여 요소를 찾는것
     * addEventListener -> 이벤트 등록하기
     * ()=> -> 화살표함수 function()과 동일
     * scrollTo(behavior) -> 부드러운 스크롤링
     */
    const topBtnElement = document .querySelector('.btn-top');

    topBtnElement.addEventListener('click',()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    })
});
