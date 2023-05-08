window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });
    //showMore catalog
    function showMore(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                
                $('.catalog__list__wrap').eq(i).toggleClass('heightAuto');
                $('.catalogShowMore').eq(i).toggleClass('hide');
                $('.catalogHide').eq(i).toggleClass('hide');
            })
        });
    };
    showMore('.catalogShowMore');
    showMore('.catalogHide');

    
    // promo slider
    $('.promo__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
      });
    // popular slider
    $('.popular__slider').slick({
        dots: false,
        slidesToShow: 7,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
    });
    
    //show info providers card
function showInfo(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            
            $('.providers__phone').eq(i).removeClass('providerscard__hide');
            
        });
    });
}
showInfo('.showInfo');

    });