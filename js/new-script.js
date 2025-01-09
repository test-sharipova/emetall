//показать выпадающий список меню при клике на троеточие в таблице фильтров
$('.btn-catalog-more').each(function(i) {
    $(this).on('click', function(){
    $('.providerscard-more__menu').eq(i).toggleClass('providerscard-more__menu-active');
    });
});
$('.providerscard-more__menu__close').on('click', function(){
    $('.providerscard-more__menu').removeClass('providerscard-more__menu-active');
})

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


