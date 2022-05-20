const imgMode = document.getElementById('imgmode');

imgMode.addEventListener('click', function () {
    document.body.classList.toggle('active');


});



$('.speakers__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    
});

$('.speakers__items-two').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true
    
});




const content = document.querySelectorAll('.schedule__cont-up-content');


content.forEach(function (cont) {
    cont.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('schedule__cont-up-content')) {
            styles.toggle('active')
        }
    });
});



$('.slider__items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});




let header = $('.header'),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset)

$(window).on('scroll', function () {
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset)
});

function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
};


$('.menu__list-link-item').click(function (event) {
    event.preventDefault();

    $('.m-menu').removeClass('active');
    $('.header__burger').removeClass('active');
    $('body').removeClass('no-scroll');

    let $this = $(this),
        blockId = $this.data('scroll');
    blockOffset = $(blockId).offset().top - headerH;
    $('html, body').animate({
        scrollTop: blockOffset
    }, 1000)
});



const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const mmenu = document.querySelector('.m-menu');



headerBurger.addEventListener('click', function() {
   body.classList.toggle('no-scroll');
   menu.classList.toggle('active');
   mmenu.classList.toggle('active');
})