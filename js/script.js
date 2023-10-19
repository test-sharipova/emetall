window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__catalog'),
    menuItem = document.querySelectorAll('.menu__link'),
    menuClose = document.querySelector('.menu__catalog__close'),
    contentClose = document.querySelectorAll('.menu__catalog__content__close'),
    menuContent = document.querySelectorAll('.menu__catalog__content'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        
        menu.classList.toggle('menu__catalog_hide');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.toggle('menu__catalog_hide');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });
    for (let i = 0; i < contentClose.length; i++) {
        contentClose[i].addEventListener('click', function() {
            menuContent[i].classList.remove('menu__catalog__content_active');
        });
      }
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

//dropdown menu - сужение меню при изменении ширины экрана
function responseMenu(){
	$('ul.dropdown-menu li.item').appendTo('ul.menu');
	var items = $('ul.menu li.item');
	var max_width = $('ul.menu').width() - $('ul.menu li.dd_menu').outerWidth();
	var width = 0;
	var hide_from = 0;

	items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 1) {
		items.eq(hide_from).nextAll('li.item').appendTo('ul.dropdown-menu');
		// items.css({'width':(max_width / (hide_from)) + 'px'});
        items.css({'width':'fit-content'});
		$('ul.menu li.dd_menu').show();
	}
	else
	{
		$('ul.menu li.dd_menu').hide();
	}
}


	$('.top_menu').on('click', '.dropdown-toggle', function () {
		$('.dropdown-menu').toggle();
	});

	$(window).on('resize', function(){
		responseMenu();
	}).trigger('resize');



// ПОКАЗ МОДАЛЬНЫХ ОКОН

    //modal login войти зарегистрироваться
    $('.header__profile').on('click', function() {
        $('.overlay, .modal__login').fadeIn();
        
    });
    //modal help footer
    $('.showHelp').on('click', function() {
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

    //показать продление медийного баннера/оплата
    
    $('.payBanner').on('click', function() {
        $('.overlay, .modal').fadeIn();
        console.log('ok');
    });

//КОРЗИНА добавить-убрать еденицу товара


    $('.plus').on('click', function() {
      var input = $(this).prev('.quantity');
      var value = parseFloat(input.val());
        input.val((value + 1).toFixed(2));
    });
  
    $('.minus').on('click', function() {
        var input = $(this).nextAll('.quantity').first();
        var value = parseFloat(input.val());
        if (value > 0) {
          input.val((value - 1).toFixed(2));
        }
      });


//показать даталист в поиске (справочник стандартов)
$('.catalog__search__input').on('click', function() {
    $('.overlay_light').fadeIn();
    $('.directory__datalist').fadeIn();
    $('.catalog__search').css('z-index', '110');
    
});
$('.directory__datalist, .overlay_light').on('click', function() {
    $('.overlay_light').fadeOut();
    $('.directory__datalist').fadeOut();
    $('.catalog__search').css('z-index', '1');
    
});
$('.directory__datalist__link').each(function(i){
    $(this).on('click', function() {
        $('.catalog__search__input').val($('.directory__datalist__link').eq(i).text());
      
    });
});

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//скопировать реферальную ссылку
$('.copy').click(function() {
    var copyText = $('#ref-link');
    copyText.select();
    document.execCommand('copy');
    $('.profile__tooltip').fadeIn();
    setTimeout(function() { $('.profile__tooltip').hide('slow'); }, 1000);
  });

//прикрепить файл реквизитов в профиле
var dt = new DataTransfer();

$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();

	for(var i = 0; i < this.files.length; i++){
		let new_file_input = '<div class="input-file-list-item">' +
			'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
			'<div class="input-file-list-remove"></div>' +
			'</div>';
		$files_list.append(new_file_input);
		dt.items.add(this.files.item(i));
	};
	this.files = dt.files;
    $('.btn_file').fadeOut();
});
$("body").on('click', '.input-file-list-remove', function(i) {
    $('.input-file-list-item').remove();
    $('.btn_file').fadeIn();
});


//показать календарь
new AirDatepicker('#calend', {
        isMobile: true,
        autoClose: true,
        range: true,
        multipleDatesSeparator: ' - ',
        showOtherMonths: true,
        dateFormat: 'dd MMM yy',
        selectOtherMonths:true,
        moveToOtherMonthsOnSelect: true,
        numberOfMonths: 3
    });

    new AirDatepicker('#calend2', {
        isMobile: true,
        autoClose: true,
        range: true,
        multipleDatesSeparator: ' - ',
        showOtherMonths: true,
        dateFormat: 'dd MMM yy',
        selectOtherMonths:true,
        moveToOtherMonthsOnSelect: true,
        numberOfMonths: 3
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

//страница профиль статистика
//табы в моб. версии
$('ul.profile__stat__tabs__caption').on('click', 'li:not(.profile__stat__tab_active)', function() {
    $(this)
      .addClass('profile__stat__tab_active').siblings().removeClass('profile__stat__tab_active')
      .closest('div.profile__stat__tabs').find('div.profile__stat__tab__content').removeClass('profile__stat__tab__content_active').eq($(this).index()).addClass('profile__stat__tab__content_active');
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

  //плавный скролл
  $('.providerscard__menu__link').on('click', function() {
    var el = $(this);
    var dest = el.attr('href');
    if (dest !== undefined && dest !== '') {
        $('html').animate({
            scrollTop: $(dest).offset().top
        }, 500);
    }
    // return false;

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
    infinite: false,
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
    
    //rew popup + company popup Достижения и награды страницы О сервисе
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