//--menu-mobile--//
const menu = document.querySelector(".header-mobile>i")
menu.addEventListener("click",function() {
    document.querySelector(".header-mobile ul").style.transform = "translateX(0%)"
    document.querySelector(".header-mobile ul").style.opacity = "1"
})

const closemenu = document.querySelector(".header-mobile ul i")
closemenu.addEventListener("click",function() {
    document.querySelector(".header-mobile ul").style.transform = "translateX(100%)"
    document.querySelector(".header-mobile ul").style.opacity = "0"
})

//--menu-mobile-list--//
$(document).ready(function(){
    $('.header-mobile-list').click(function(){
        $(this).parent().toggleClass('active2');
        $(this).parent().children('.header-mobile-list-item').slideToggle();
    })
});

//--slider--//
$(document).ready(function(){
    $(".img-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggble: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 1,
                }
            },

            {
                breakpoint: 739,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  infinite: false,
                }
            },
        ]
    });
});

//--backtop--//
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    });
});

//--product-details--//
const bigImg = document.querySelector(".product-details-big-img img")
const smallImg = document.querySelectorAll(".product-details-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

//--product-details-size--//
$(document).ready(function() {
    $('.product-details-size-list li').click(function(){
        $('.product-details-size-list li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
});