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
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                                        
                } 
            }
        ]
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

//raiting count
const counters = document.querySelectorAll('.raiting-counter'),
      lines = document.querySelectorAll('.about__raiting__line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML*100/10 + '%';
});

//providerscard slider

$('.providerscard__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.providerscard__slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slideToScroll: 2,
                
            } 
        }
    ]
  });
  $('.providerscard__slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.providerscard__slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
  });

  //providerscard tabs
  $(function() {
  
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });

  // show map adresses
  function showAdress(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            
            $('.providerscard__map__adress').eq(i).fadeIn();
            
        });
    });
}
showAdress('.providerscard__map__block');
    });