//показать выпадающий список меню при клике на троеточие в таблице фильтров
$('.btn-catalog-more').each(function(i) {
    $(this).on('click', function(e){
        e.stopPropagation(); // Останавливаем всплытие события
        $('.providerscard-more__menu').removeClass('providerscard-more__menu-active');
        $('.providerscard-more__menu').eq(i).toggleClass('providerscard-more__menu-active');
        if ($(window).width() < 768) {
            $('.overlay').fadeIn();
        }
    });
});

// Обработчик для клика по документу - скрыть меню при клике на любую точку документа
$(document).on('click', function(e) {
    if (!$(e.target).closest('.providerscard-more__menu').length) {
        $('.providerscard-more__menu').removeClass('providerscard-more__menu-active');
    }
});

$('.providerscard-more__menu__close').on('click', function(){
    $('.providerscard-more__menu').removeClass('providerscard-more__menu-active');
    if ($(window).width() < 768) {
        $('.overlay').fadeOut();
    }
});



//показать модалку с измененениями в дизайне (инфо)
let modalShown = false; // Флаг для отслеживания, показано ли модальное окно
    let modalClosed = false; // Флаг для отслеживания, закрыто ли модальное окно

    if ($(window).width() > 768) {
        $(window).scroll(function() {
            if (!modalShown && !modalClosed && $(this).scrollTop() > 700) {
                $('.overlay').fadeIn();
                $('.modal-info').fadeIn();
                modalShown = true; // Устанавливаем флаг в true, чтобы окно больше не показывалось
            }
        });

        // Обработчик события для кнопки закрытия модального окна
        $('.modal-info .close-button').click(function() {
            $('.overlay').fadeOut();
            $('.modal-info').fadeOut();
            modalClosed = true; // Устанавливаем флаг в true, чтобы окно не показывалось повторно
        });
    }


    //показать инфо при наветдении на значок i 
    if ($(window).width() > 768) {
        $('.catalogFilters__info').hover(
            function() {
                // Находим соответствующий .table__note и добавляем класс
                $(this).next('.table__note').addClass('table__note_active');
            },
            function() {
                // Находим соответствующий .table__note и убираем класс
                $(this).next('.table__note').removeClass('table__note_active');
            }
        );
    }
    if ($(window).width() < 768) {

        $('.catalogFilters__info').each(function(i) {
            $(this).on('click', function(){
            $('.table__note').eq(i).toggleClass('table__note_active');
            $('.overlay').fadeIn(0);
            });
        });

        
        $('.table__note__close, .overlay').on('click', function() {
            // Переключаем класс при клике
            $('.table__note').removeClass('table__note_active');
            $('.overlay').fadeOut(0);
        });
        
        }

