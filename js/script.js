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
    //показать каталог меню
    $('.showCatalog').on('click', function(){
        $('.menu__catalog').toggleClass('menu__catalog_hide');
        $('.btn__burger').toggleClass('btn__burger_active');
        $('.menu__catalog__overlay').toggleClass('menu__catalog__overlay_active');
        
    });
    

    $(function() {
  
        $('ul.menu__catalog__scroll').on('mouseenter', 'li:not(.menu__catalog__link_active)', function() {
          $(this)
            .addClass('menu__catalog__link_active').siblings().removeClass('menu__catalog__link_active')
            .closest('div.menu__catalog__wrap').find('div.menu__catalog__content').removeClass('menu__catalog__content_active').eq($(this).index()).addClass('menu__catalog__content_active');
        });
        
      });
    
//overlay
function consoleBG() {
    if ($(window).scrollTop() == 160) {
      $('.menu__catalog__overlay').css({
        'top' : '0px',
        
      });
      
    } 
    
  }
  consoleBG();

    //modal login войти зарегистрироваться
    $('.header__profile').on('click', function() {
        $('.overlay, .modal__login').fadeIn();
        
    });
    //modal help footer
    $('.help').on('click', function() {
        $('.overlay, .modal__help').fadeIn();
    });
    //modal order оформить заказ
    $('.order_btn').on('click', function() {
        $('.overlay, .modal__order').fadeIn();
    });
    // товар добавлен в корзину тогглер
    $('.modal__addincart__tonn').on('click', function() {
        $('.modal__addincart__tonn').addClass('active');
        $('.modal__addincart__metr').removeClass('active');
    });
    $('.modal__addincart__metr').on('click', function() {
        $('.modal__addincart__metr').addClass('active');
        $('.modal__addincart__tonn').removeClass('active');
    });
    //providerscard добавить в корзину товар
    $('.addincart').on('click', function() {
        $('.overlay, .modal__addincart').fadeIn();
    });

    //закрыть модальное окно
    $('.modal__close, .overlay, .order__close').on('click', function() {
        $('.overlay, .modal').fadeOut();
        
    });

    //показать вопрос с уточнением города
    $('.header__place').on('click', function() {
        $('.header__place__quest').toggleClass('hide');
    });

    //showMore catalog
    function showMore(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                
                $('.catalog__list__wrap').eq(i).toggleClass('heightAuto');
                $('.catalogShowMore').eq(i).toggleClass('hide');
                $('.catalogHide').eq(i).toggleClass('hide');
            });
        });
    }
    showMore('.catalogShowMore');
    showMore('.catalogHide');

    //меняется фон у селекта в форме при фокусе и выборе
const selects = document.querySelectorAll('.select');

selects.forEach(select => {
  select.addEventListener('focus', () => {
    
    select.classList.add('select_active');
  });
});
    
    // promo slider
    $('.promo__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1                   
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    variableWidth: true,
                    centerMode: true,
                                       
                } 
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    variableWidth: true,
                    centerMode: true,
                                       
                } 
            }
        ]
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
                slidesToShow: 1,
                
                centerMode: true,
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

  // show map adresses providerscard
  function showAdress(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            
            $('.providerscard__map__adress').eq(i).fadeIn();
            
        });
    });
}
showAdress('.providerscard__map__block');



// страница каталог фильтры, Страница Поставщики фильтры

//show catalogFilters
$('.showFilters').on('click', function() {
    $('.catalogFilters__form').fadeIn();
    $('.catalogFilters__header').fadeIn();
    $('.overlay').fadeIn();
    $('.showFilters').fadeOut();
});
$('.catalogFilters__close').on('click', function() {
    $('.catalogFilters__form').fadeOut();
    $('.catalogFilters__header').fadeOut();
    $('.overlay').fadeOut();
    $('.showFilters').fadeIn();
});



// показать все характериситки в моб
function tableShowMore(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            
            $('.table__row_top').eq(i).toggleClass('heightAuto');
            $('.table__showMore').eq(i).toggleClass('hide');
            $('.table__hide').eq(i).toggleClass('hide');
        });
    });
}
tableShowMore('.table__showMore');
tableShowMore('.table__hide');

//страница рекламодателям

// rew slider
$('.advRew__slider').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                centerMode: true,
                slidesToShow: 2,  
                arrows: false,                 
            }
           
        }
    ]
  });
  

    //страница blog
    //blog slider

    $('.blog__slider').slick({
        dots: false,
        slidesToShow: 6,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    variableWidth: true,
                    centerMode: true,
                                       
                } 
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    variableWidth: true,
                    centerMode: true,
                                       
                } 
            }
        ]
    });
    
    //rew popup
  $('.advRew__slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
    });
  
    });