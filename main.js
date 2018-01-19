$(document).ready(function() {
    menu_item_animate("#home", ".one", 60);
    menu_item_animate("#code", ".code", 30);
    menu_item_animate("#art", ".art", 30);
    menu_item_animate("#video", ".video", 30);
});

function menu_item_animate(id, htmlClass, offsetNum) {
    return $(id).on('click', function(event) {
        $('html,body').animate({
            scrollTop: $(htmlClass).offset().top - offsetNum
        },
        'slow');
    });
}