$('.btn-catalog-more').each(function(i) {
    $(this).on('click', function(){
    $('.providerscard-more__menu').eq(i).toggleClass('providerscard-more__menu-active');
    });
});

//разместить заявку страница applications
// $('.applications-order').on('click', function() {
//     $('.overlay, .modal-place-order').fadeIn();
//   });


