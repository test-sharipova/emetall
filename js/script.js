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
    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".dropdown-menu" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('.dropdown-menu').hide(); // скрываем его
        }
    
    
        
    });


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
    //показать выбор города 
    $('.city-modal').on('click', function() {
      $('.overlay, .modal__city').fadeIn();
    });

    //показать продление медийного баннера/оплата
    
    $('.payBanner').on('click', function() {
        $('.overlay, .modal').fadeIn();
        console.log('ok');
    });

    //подписаться за заявку страница applications
    $('.applications-subscribe').on('click', function() {
      $('.overlay, .modal__applications-subscribe').fadeIn();
    });

    //разместить заявку страница applications
    $('.applications-order').on('click', function() {
      $('.overlay, .modal__applications__order').fadeIn();
    });

     //Отправить приглашение поставщику
     $('.invite-provider').on('click', function() {
      $('.overlay, .modal__invite').fadeIn();
    });

      //заказать обратный звонок
      $('.call').on('click', function() {
        $('.overlay, .modal__call').fadeIn();
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

$('.input-file input[type=file]').each(function(){
  $(this).on('change', function(){
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

  
//страница профиль статистика
    //табы в моб. версии
    $('ul.profile__stat__tabs__caption').on('click', 'li:not(.profile__stat__tab_active)', function() {
        $(this)
        .addClass('profile__stat__tab_active').siblings().removeClass('profile__stat__tab_active')
        .closest('div.profile__stat__tabs').find('div.profile__stat__tab__content').removeClass('profile__stat__tab__content_active').eq($(this).index()).addClass('profile__stat__tab__content_active');
    });
    
    //слайдер листать список топовых категорий
    $('.profile__stat__list__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
      });
       
    $('.profile__stat__btn_prev').each(function(i) {
        $(this).on('click', function() {
            $('.profile__stat__list__slider').eq(i).slick('slickPrev');
            
        });
      });
      $('.profile__stat__btn_next').each(function(i) {
        $(this).on('click', function() {
            $('.profile__stat__list__slider').eq(i).slick('slickNext');
            
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
                 
            },
            {
                breakpoint: 1420,
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

//фильтры в кастомном дропдауне c возможностью ввода диапазона на странице каталог фильтры

$('.custom-drop').on('click', function(){
    $('.form__input__dropdown').css('height', 'auto');
});
//фильтр
$('.form__input__dropdown__filter-count-from, .form__input__dropdown__filter-count-to').on('input', function(){
    var from = parseInt($('.form__input__dropdown__filter-count-from').val());
    var to = parseInt($('.form__input__dropdown__filter-count-to').val());
    $('.form__input__dropdown__label').each(function(){
      var price = parseInt($(this).find('.fs_15').text());
      if(price >= from && price <= to){
        $(this).show();
      }else{
        $(this).hide();
      }
    });
  });
//отображаются все значения, если не заполнен фильтр
$('.form__input__dropdown__filter-count').on('input', function(){
  if($(this).val() == '') {
    $('.form__input__dropdown__label').show();
  }
});
//значения выбранных чекбоксов подставляется в значение инпута
$('.catalogFilters-sizecheck').change(function() {
  var checkedLabels = $('.catalogFilters-sizecheck:checked').map(function() {
    return $('label[for="' + $(this).attr('id') + '"]').text().trim();
  }).get().join(', ');
  $('#catalogFilters-size').val(checkedLabels.trim());
  
});
//скрыть дропдаун при клике на окно
  $(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $( ".form__input__search" ); // тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.form__input__dropdown').hide(); // скрываем его

    } else {
        $('.form__input__dropdown').show();
    }
     });

// стили datalist на странице каталог-фильтры, выбор города
$('.filter-dropdown').each(function(){
    let filter = $(this),
        filterInput = filter.find('input'),
        filterList = filter.find('datalist');
       
        filterInput.on('focus', function () {
          filterList.css('display', 'block');
          $('.modal__city__list').css('display', 'none'); //для выбора города
          $('.remove-val').css('display', 'block'); //для выбора города
        });
       
        filterList.find('option').on('click', function () {
          filterInput.val($(this).val());
          filterList.css('display', 'none');
            
      });
      
      filterInput.on('input', function() {
        currentFocus = -1;
        var text = filterInput.val().toUpperCase();
        for (let option of filterList.find('option')) {
          if(option.value.toUpperCase().indexOf(text) > -1){
            $(option).css('display', 'block');
        }else{
          $(option).css('display', 'none');
          }
        };
      });
        var currentFocus = -1;
        filterInput.onkeydown = function(e) {
          if(e.keyCode == 40){
            currentFocus++
           addActive(filterList.options);
          }
          else if(e.keyCode == 38){
            currentFocus--
           addActive(filterList.options);
          }
          else if(e.keyCode == 13){
            e.preventDefault();
                if (currentFocus > -1) {
                  /*and simulate a click on the "active" item:*/
                  if (filterList.options) filterList.options[currentFocus].click();
                }
          }
        }
        
        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("active");
          }
          function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
              x[i].classList.remove("active");
            }
          }
         
          $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( ".filter-dropdown" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                $(filterList).hide(); // скрываем его
                
            }
           });
           $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( ".filter-dropdown form" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                ) { 
                  $('.modal__city__list').css('display', 'grid'); //показать весь список городов
                
            }
           });
          
             
});
//выбор города - вставить значение в инпут
$('.modal__city__list button').click(function() {
  $('#modal-city').val($(this).text());
});


 

//select 
function newSelect() {
  $('.select_main').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 350; // длительность анимации 
  
    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:selected').text()
    }).insertAfter(_this);
  
    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);
  
    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
  
    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);
  
            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');
  
                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );
  
                selectList.slideUp(duration);
                selectHead.removeClass('on');
                let select = $('select');
                $(select).trigger('change');
            });
  
        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
  });
  $(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $( "new-select" ); // тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.new-select__list').hide(); // скрываем его
    }
   });
}
newSelect();


//меняется контент подраздела в зависимости от раздела
var select1 = document.getElementById("chapter");
var select2 = document.getElementById("chapter2");
if (select1) {
  document.querySelector('.armatura').style.display = 'block';

select1.onchange = function() {
  changeSelect2Options();
  
};

function changeSelect2Options() {
  var selectedOption = select1.value;
  
  switch(selectedOption) {
    case "Арматура":
      var elements = document.querySelectorAll('.chapter_2');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
      document.querySelector('.armatura').style.display = 'block';
      break;

    case "Балка":
      var elements = document.querySelectorAll('.chapter_2');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
      document.querySelector('.balka').style.display = 'block';
      break;

    case "Баллоны":
      var elements = document.querySelectorAll('.chapter_2');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
      document.querySelector('.ballony').style.display = 'block';
      break;

    case "Дробь":
      var elements = document.querySelectorAll('.chapter_2');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
      document.querySelector('.drob').style.display = 'block';
      break;

    case "Заглушки":
       var elements = document.querySelectorAll('.chapter_2');
         for (var i = 0; i < elements.length; i++) {
           elements[i].style.display = 'none';
        }
       document.querySelector('.zaglushki').style.display = 'block';
       break;

      case "Задвижки":
      var elements = document.querySelectorAll('.chapter_2');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
      document.querySelector('.zadvighki').style.display = 'block';
      break;
      
      case "Катанка":
        var elements = document.querySelectorAll('.chapter_2');
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
          }
        document.querySelector('.katanka').style.display = 'block';
        break;

      case "Квадрат":
        var elements = document.querySelectorAll('.chapter_2');
           for (var i = 0; i < elements.length; i++) {
             elements[i].style.display = 'none';
          }
         document.querySelector('.kwadrat').style.display = 'block';
        break;

       case "Краны шаровые":
         var elements = document.querySelectorAll('.chapter_2');
           for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
          }
         document.querySelector('.krany').style.display = 'block';
          break;

      case "Лента и штрипс":
        var elements = document.querySelectorAll('.chapter_2');
           for (var i = 0; i < elements.length; i++) {
           elements[i].style.display = 'none';
          }
        document.querySelector('.lenta').style.display = 'block';
         break;

         case "Лист":
          var elements = document.querySelectorAll('.chapter_2');
            for (var i = 0; i < elements.length; i++) {
              elements[i].style.display = 'none';
            }
          document.querySelector('.list').style.display = 'block';
          break;
    
        case "Металло-черепица":
          var elements = document.querySelectorAll('.chapter_2');
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
          }
          document.querySelector('.metallocherepiza').style.display = 'block';
          break;
    
        case "Отводы":
          var elements = document.querySelectorAll('.chapter_2');
            for (var i = 0; i < elements.length; i++) {
              elements[i].style.display = 'none';
            }
          document.querySelector('.otvody').style.display = 'block';
          break;
    
        case "Переходы":
          var elements = document.querySelectorAll('.chapter_2');
            for (var i = 0; i < elements.length; i++) {
              elements[i].style.display = 'none';
            }
          document.querySelector('.perehody').style.display = 'block';
          break;
    
        case "Поковка":
           var elements = document.querySelectorAll('.chapter_2');
             for (var i = 0; i < elements.length; i++) {
               elements[i].style.display = 'none';
            }
           document.querySelector('.pokovka').style.display = 'block';
           break;
    
          case "Полоса":
          var elements = document.querySelectorAll('.chapter_2');
            for (var i = 0; i < elements.length; i++) {
              elements[i].style.display = 'none';
            }
          document.querySelector('.polosa').style.display = 'block';
          break;
          
          case "Проволока":
            var elements = document.querySelectorAll('.chapter_2');
              for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
              }
            document.querySelector('.provoloka').style.display = 'block';
            break;
    
          case "Профнастил":
            var elements = document.querySelectorAll('.chapter_2');
               for (var i = 0; i < elements.length; i++) {
                 elements[i].style.display = 'none';
              }
             document.querySelector('.profnastil').style.display = 'block';
            break;
    
           case "Рельсы":
             var elements = document.querySelectorAll('.chapter_2');
               for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
              }
             document.querySelector('.relsy').style.display = 'block';
              break;
    
          case "Рулоны":
            var elements = document.querySelectorAll('.chapter_2');
               for (var i = 0; i < elements.length; i++) {
               elements[i].style.display = 'none';
              }
            document.querySelector('.rulony').style.display = 'block';
             break;
        
             case "Сетка":
              var elements = document.querySelectorAll('.chapter_2');
                for (var i = 0; i < elements.length; i++) {
                  elements[i].style.display = 'none';
                }
              document.querySelector('.setka').style.display = 'block';
              break;
      
            case "Слитки":
              var elements = document.querySelectorAll('.chapter_2');
                 for (var i = 0; i < elements.length; i++) {
                   elements[i].style.display = 'none';
                }
               document.querySelector('.slitki').style.display = 'block';
              break;
      
             case "Сэндвич-панели":
               var elements = document.querySelectorAll('.chapter_2');
                 for (var i = 0; i < elements.length; i++) {
                  elements[i].style.display = 'none';
                }
               document.querySelector('.sandwichpaneli').style.display = 'block';
                break;
      
            case "Тройники":
              var elements = document.querySelectorAll('.chapter_2');
                 for (var i = 0; i < elements.length; i++) {
                 elements[i].style.display = 'none';
                }
              document.querySelector('.troiniki').style.display = 'block';
               break;

               case "Труба":
                var elements = document.querySelectorAll('.chapter_2');
                  for (var i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                  }
                document.querySelector('.truba').style.display = 'block';
                break;
        
              case "Уголок":
                var elements = document.querySelectorAll('.chapter_2');
                   for (var i = 0; i < elements.length; i++) {
                     elements[i].style.display = 'none';
                  }
                 document.querySelector('.ugolok').style.display = 'block';
                break;
        
               case "Фланцы":
                 var elements = document.querySelectorAll('.chapter_2');
                   for (var i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                  }
                 document.querySelector('.flanzy').style.display = 'block';
                  break;
        
              case "Чушки":
                var elements = document.querySelectorAll('.chapter_2');
                   for (var i = 0; i < elements.length; i++) {
                   elements[i].style.display = 'none';
                  }
                document.querySelector('.chushki').style.display = 'block';
                 break;

                 case "Швеллер":
                  var elements = document.querySelectorAll('.chapter_2');
                    for (var i = 0; i < elements.length; i++) {
                      elements[i].style.display = 'none';
                    }
                  document.querySelector('.shweller').style.display = 'block';
                  break;
          
                case "Шестигранник":
                  var elements = document.querySelectorAll('.chapter_2');
                     for (var i = 0; i < elements.length; i++) {
                       elements[i].style.display = 'none';
                    }
                   document.querySelector('.shestigrannik').style.display = 'block';
                  break;
          
                 case "Шина":
                   var elements = document.querySelectorAll('.chapter_2');
                     for (var i = 0; i < elements.length; i++) {
                      elements[i].style.display = 'none';
                    }
                   document.querySelector('.shina').style.display = 'block';
                    break;
          
                case "Электроды":
                  var elements = document.querySelectorAll('.chapter_2');
                     for (var i = 0; i < elements.length; i++) {
                     elements[i].style.display = 'none';
                    }
                  document.querySelector('.elektrody').style.display = 'block';
                   break;
      
        
  }
  
}
}


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

    //блог - показать больше статей
  
        
        var visibleBlocks = 12;
        var allBlocks = $('.blog__articles__item').length;
                
        $('.blog__articles__item').slice(visibleBlocks).hide();
                
        $('.btn_show-more').on('click', function() {
                  visibleBlocks += 12;
                  
          if (visibleBlocks >= allBlocks) {
            $('.btn_show-more').hide();
          }
                   
          $('.blog__articles__item').slice(0, visibleBlocks).show();
        });
      
    //спецпредложения - показать больше спецпредложений
  
        
    var visibleBlocks1 = 12;
    var allBlocks1 = $('.offers__item').length;
            
    $('.offers__item').slice(visibleBlocks1).hide();
            
    $('.btn_show-more').on('click', function() {
              visibleBlocks1 += 12;
              
      if (visibleBlocks1 >= allBlocks1) {
        $('.btn_show-more').hide();
      }
               
      $('.offers__item').slice(0, visibleBlocks1).show();
    });  
    
    //поставщики (provider-site) - показать больше поставщиков
  
        
    var visibleBlocks2 = 8;
    var allBlocks2 = $('.providerSite__item').length;
            
    $('.providerSite__item').slice(visibleBlocks2).hide();
            
    $('.btn_show-more').on('click', function() {
              visibleBlocks2 += 12;
              
      if (visibleBlocks2 >= allBlocks2) {
        $('.btn_show-more').hide();
      }
               
      $('.providerSite__item').slice(0, visibleBlocks2).show();
    });       
   
  



    // стили datalist на странице справочника стандартов

    let directory = document.getElementById('directory'),
    directorysearch = document.getElementById('directorysearch');
    if(directory) {
        directory.onfocus = function () {
            directorysearch.style.display = 'block';
            $('.overlay_light').fadeIn();
            $('.catalog__search').css('z-index', '11');
          };
          for (let option of directorysearch.options) {
            option.onclick = function () {
                directory.value = option.value;
                directorysearch.style.display = 'none';
                
                $('.overlay_light').fadeOut();
            }
          };
          
          directory.oninput = function() {
            currentFocus = -1;
            var text = directory.value.toUpperCase();
            for (let option of directorysearch.options) {
              if(option.value.toUpperCase().indexOf(text) > -1){
                option.style.display = "block";
            }else{
              option.style.display = "none";
              }
            };
          }
          var currentFocus = -1;
          directory.onkeydown = function(e) {
            if(e.keyCode == 40){
              currentFocus++
             addActive(directorysearch.options);
            }
            else if(e.keyCode == 38){
              currentFocus--
             addActive(directorysearch.options);
            }
            else if(e.keyCode == 13){
              e.preventDefault();
                  if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (directorysearch.options) directorysearch.options[currentFocus].click();
                  }
            }
          }
          
          function addActive(x) {
              if (!x) return false;
              removeActive(x);
              if (currentFocus >= x.length) currentFocus = 0;
              if (currentFocus < 0) currentFocus = (x.length - 1);
              x[currentFocus].classList.add("active");
            }
            function removeActive(x) {
              for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("active");
              }
            }
        
           $('.overlay_light').on('click', function(){
            directorysearch.style.display = 'none';
            $('.overlay_light').fadeOut();
           })
    }


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

    //страница для поставщиков
    //слайдер
    $('.forproviders__cases__slider').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
        slidesToShow: 1,
        infinite: true,
        responsive: [
          {
              breakpoint: 800,
              settings: {
                  arrows: false,
                  dots: true,            
              }
               
          },
          
          
      ]
    });
    //выбор тарифа
    var radioButtons = $('.forproviders__details__tarif-item input[type="radio"]');

    radioButtons.change(function() {
      // Находим ближайший блок с классом "forproviders__details__tarif-item"
      var tarifItem = $(this).closest('.forproviders__details__tarif-item');
      $('.forproviders__details__tarif-item').removeClass('active');
      // Если радиокнопка выбрана, то добавляем класс "active", иначе удаляем его
      if ($(this).is(':checked')) {
        tarifItem.addClass('active');
      } else {
        tarifItem.removeClass('active');
      }
      var activeTarifName = $('.forproviders__details__tarif-item.active').find('.forproviders__details__tarif-name').text();
      $('.forproviders__details__order').val(activeTarifName);
      var activeTarifCost = $('.forproviders__details__tarif-item.active').find('.forproviders__details__tarif-cost').text();
      $('.forproviders__details__cost').val(activeTarifCost);
    });
    radioButtons.on('click', function() {
      $('.forproviders__details__choise').css({'margin-top': '30px', 'opacity': '1'});
    })
   

    });


    //страница заявки
    //показать контакты в моб версии
    $('.btn_show-contacts').each(function(i) {
      $(this).on('click', function() {
        $('.applications__table__contacts').eq(i).toggleClass('applications__table__contacts-active');
        $('.mobile_file').eq(i).toggleClass('mobile_file-active');
        $('.btn_show-contacts-show').eq(i).toggleClass('active');
        $('.btn_show-contacts-move').eq(i).toggleClass('active');
    });
    })

    //карта на странице поставщика Офисы
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.050514, 82.968489],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),
      customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="providerscard__map__adress">' +
            '<h3 class="fs_13 fw_600 mb_8">{{properties.hintContent}}</h3>' +
            '<div class="fs_13 gray mb_12">Ежедневно с 09:00 до 18:00</div>' +
            '<a href="#" class="btn_lightblue">' +
            '<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.11141 1.21443C4.26227 0.423352 5.61531 0.000750288 6.99961 0C8.38445 0.000593173 9.73803 0.423367 10.8893 1.21488C12.0405 2.00639 12.9377 3.13111 13.4674 4.44686C13.9971 5.7626 14.1356 7.21031 13.8653 8.60699C13.5951 10.0037 12.9282 11.2866 11.9491 12.2936C11.6185 12.6335 11.1713 13.0129 10.6876 13.4232C9.31697 14.5859 7.65372 15.9969 7.52319 17.4616C7.49752 17.7576 7.28746 18 6.99961 18C6.71176 18 6.50249 17.7576 6.47604 17.4616C6.34549 15.9967 4.68055 14.5838 3.30886 13.4198C2.82504 13.0092 2.3777 12.6296 2.04705 12.2896C1.06902 11.2822 0.40327 9.99931 0.133886 8.60302C-0.135498 7.20673 0.00356929 5.75967 0.533522 4.44461C1.06348 3.12955 1.96054 2.0055 3.11141 1.21443ZM6.08272 9.47562C6.37334 9.59941 6.68482 9.66312 6.99939 9.66312C7.63468 9.66312 8.24395 9.4036 8.69317 8.94166C9.14239 8.47972 9.39476 7.8532 9.39476 7.19992C9.39476 6.54664 9.14239 5.92011 8.69317 5.45817C8.24395 4.99623 7.63468 4.73672 6.99939 4.73672C6.68482 4.73672 6.37334 4.80043 6.08272 4.92422C5.7921 5.04801 5.52803 5.22944 5.3056 5.45817C5.08317 5.6869 4.90673 5.95844 4.78635 6.25729C4.66597 6.55614 4.60401 6.87645 4.60401 7.19992C4.60401 7.52339 4.66597 7.8437 4.78635 8.14254C4.90673 8.44139 5.08317 8.71294 5.3056 8.94166C5.52803 9.17039 5.7921 9.35183 6.08272 9.47562Z" fill="#2764E0"/>' +
            '</svg>' +
            'Построить маршрут</a>' +
        '</div>'
    );
    
     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Новосибирск, ул. Академика Королева, 24',
          balloonContent: 'Новосибирск, ул. Академика Королева, 24'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.png',
          // Размеры метки.
          iconImageSize: [24, 24],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
          balloonContentLayout: customBalloonContentLayout
      });

      myPlacemark2 = new ymaps.Placemark([55.039791, 82.802157], {
          hintContent: 'Новосибирск, Колыванское ш., 19, 21',
          balloonContent: 'Новосибирск, Колыванское ш., 19, 21',
          
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.png',
          // Размеры метки.
          iconImageSize: [24, 24],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          balloonContentLayout: customBalloonContentLayout
          // Макет содержимого.
          // iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemark2);
});
 //карта на странице поставщика Склады
ymaps.ready(function () {
  var myMap = new ymaps.Map('map2', {
          center: [55.050514, 82.968489],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),
      customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="providerscard__map__adress">' +
            '<h3 class="fs_13 fw_600 mb_8">{{properties.hintContent}}</h3>' +
            '<div class="fs_13 gray mb_12">Ежедневно с 09:00 до 18:00</div>' +
            '<a href="#" class="btn_lightblue">' +
            '<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.11141 1.21443C4.26227 0.423352 5.61531 0.000750288 6.99961 0C8.38445 0.000593173 9.73803 0.423367 10.8893 1.21488C12.0405 2.00639 12.9377 3.13111 13.4674 4.44686C13.9971 5.7626 14.1356 7.21031 13.8653 8.60699C13.5951 10.0037 12.9282 11.2866 11.9491 12.2936C11.6185 12.6335 11.1713 13.0129 10.6876 13.4232C9.31697 14.5859 7.65372 15.9969 7.52319 17.4616C7.49752 17.7576 7.28746 18 6.99961 18C6.71176 18 6.50249 17.7576 6.47604 17.4616C6.34549 15.9967 4.68055 14.5838 3.30886 13.4198C2.82504 13.0092 2.3777 12.6296 2.04705 12.2896C1.06902 11.2822 0.40327 9.99931 0.133886 8.60302C-0.135498 7.20673 0.00356929 5.75967 0.533522 4.44461C1.06348 3.12955 1.96054 2.0055 3.11141 1.21443ZM6.08272 9.47562C6.37334 9.59941 6.68482 9.66312 6.99939 9.66312C7.63468 9.66312 8.24395 9.4036 8.69317 8.94166C9.14239 8.47972 9.39476 7.8532 9.39476 7.19992C9.39476 6.54664 9.14239 5.92011 8.69317 5.45817C8.24395 4.99623 7.63468 4.73672 6.99939 4.73672C6.68482 4.73672 6.37334 4.80043 6.08272 4.92422C5.7921 5.04801 5.52803 5.22944 5.3056 5.45817C5.08317 5.6869 4.90673 5.95844 4.78635 6.25729C4.66597 6.55614 4.60401 6.87645 4.60401 7.19992C4.60401 7.52339 4.66597 7.8437 4.78635 8.14254C4.90673 8.44139 5.08317 8.71294 5.3056 8.94166C5.52803 9.17039 5.7921 9.35183 6.08272 9.47562Z" fill="#2764E0"/>' +
            '</svg>' +
            'Построить маршрут</a>' +
        '</div>'
    );
    
     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Новосибирск, ул. Академика Королева, 24',
          balloonContent: 'Новосибирск, ул. Академика Королева, 24'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.png',
          // Размеры метки.
          iconImageSize: [24, 24],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
          balloonContentLayout: customBalloonContentLayout
      });

      myPlacemark2 = new ymaps.Placemark([55.039791, 82.802157], {
          hintContent: 'Новосибирск, Колыванское ш., 19, 21',
          balloonContent: 'Новосибирск, Колыванское ш., 19, 21',
          
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.png',
          // Размеры метки.
          iconImageSize: [24, 24],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          balloonContentLayout: customBalloonContentLayout
          // Макет содержимого.
          // iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemark2);
});
