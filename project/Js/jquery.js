$(document).ready(function () {
    $('.btn__dropdown').click(function () {
        $(this).next('.sub__menu--list').slideToggle(300);
        $(this).find('#icon_btn_drop').toggleClass('rotate__btn__menu--list');
    })
});