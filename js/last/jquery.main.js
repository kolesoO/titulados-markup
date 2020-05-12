$(document).ready(function(){
    formValidation();
    accordion();
    $('.bg-img').each(function(){
        $(this).closest('.bg-img-wrap').css('backgroundImage','url('+$(this).attr('src')+')');
    });
    if("mask" in $.fn){
        $('.phone-input').mask("+7 999 999 99 99");
    }
    $( ".datepicker" ).datepicker({
        onSelect: function(date) {
            $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
        },
        firstDay: 1
    });
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
    // star rating
    $(".rateyo").rateYo({
        fullStar: true,
        starWidth: "30px",
        spacing: "2px",
        normalFill: "#a8b2c5",
        ratedFill: "#ffcc00"
    });
    $(".star-rating").rateYo({
        fullStar: true,
        starWidth: "14px",
        spacing: "2px",
        normalFill: "#a8b2c5",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $('.drop-opener').on('click', function(event) {
        event.preventDefault();
        if (!($(this).closest('.drop-wrap').hasClass('active')) && $('.drop-wrap.active').length) {
            $('.drop-wrap.active').removeClass('active');
        }
        // open this drop
        $(this).closest('.drop-wrap').toggleClass('active');
    });
    // close drop on click body
    $(document).click(function(event) {
        if ($(event.target).closest('.drop-wrap').length) return;
        $('.drop-wrap').removeClass('active');
        event.stopPropagation();
    });
    $('.order-item__expand-opener').on('click', function(event) {
        event.preventDefault();
        var $item = $(this).closest('.order-item');
        $item.find('.order-item__expand').slideToggle(function(){
            $item.toggleClass('expand-active');
        });
    });
    $('.filter-item__expand-opener').on('click', function(event) {
        event.preventDefault();
        var $item = $(this).closest('.filter-item');
        $item.find('.filter-item__expand').slideToggle(function(){
            $item.toggleClass('expand-active');
        });
    });

    $('.task-item__expand-opener').on('click', function(event) {
        event.preventDefault();
        var $item = $(this).closest('.task-item');
        $item.toggleClass('expand-active');
        $item.find('.task-item__expand').slideToggle(function(){
        });
    });
    $('.task-item__expand-side-opener').on('click', function(event) {
        event.preventDefault();
        var $item = $(this).closest('.task-item');
        $item.toggleClass('expand-side-active');
        $item.find('.task-item__expand-side').slideToggle(function(){
        });
    });




    $('.task-item__expand-closer').on('click', function(event) {
        event.preventDefault();
        var $item = $(this).closest('.task-item');
        $item.find('.task-item__expand').slideUp(function(){
            $item.removeClass('expand-active');
        });
    });


    $('.side-menu__opener').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.side-menu').toggleClass('menu-active');
    });
    // multiple select
    $(".multiple select").select2({
        tags: true
    });



    $('.drop-block__opener').on('click', function(event) {
        event.preventDefault();
        // close opened
        if (!($(this).closest('.drop-block').hasClass('open-active')) && $('.drop-block.open-active').length) {
            $('.drop-block.open-active').removeClass('open-active');
        }
        // open this drop
        $(this).closest('.drop-block').toggleClass('open-active')
    });
    // close drop on click body
    $(document).click(function(event) {
        if ($(event.target).closest('.drop-block').length) return;
        $('.drop-block').removeClass('open-active');
        event.stopPropagation();
    });

    $("[data-toggle=popover]").popover({
        html : true,
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        },
        title: function() {
            var title = $(this).attr("data-popover-content");
            return $(title).children(".popover-heading").html();
        }
    });
    $(".calendar-day").popover({
        placement: 'bottom',
        html: 'true',
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        }
    });

    $('.promo-block__slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
    });
    $('.photo-slider__list').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    //меню услуги выпадающий список
    if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.dropdown-link').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('opened');
            $(this).parent().find('.submenu').slideToggle();
        });
    };
});


$(function() {
    if (screen.width <= '991') {
        $('.bal-btn').attr('data-placement', 'top');
    } else {
        $('.bal-btn').attr('data-placement', 'bottom');
    }

});


function initMap() {
    var mapOptions = {
        zoom: 15,
        scrollwheel: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        center: new google.maps.LatLng(55.057270, 82.914003)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var image = 'images/map-ico.png';
    var myLatLng = new google.maps.LatLng(55.057270, 82.914003);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}


function initMapAll() {
    var mapOptions = {
        zoom: 5,
        scrollwheel: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        center: new google.maps.LatLng(55.099566, 86.486541)
    }
    var map = new google.maps.Map(document.getElementById('map-all'),
        mapOptions);

    var image = 'images/map-ico.png';
    var pos1 = new google.maps.LatLng(54.985653, 73.325943);
    var pos2 = new google.maps.LatLng(54.983337, 82.940472);
    var pos3 = new google.maps.LatLng(56.496998, 84.996947);
    var pos4 = new google.maps.LatLng(56.006227, 92.910506);
    var pos5 = new google.maps.LatLng(52.284714, 104.298934);

    var beachMarker = new google.maps.Marker({
        position: pos1,
        map: map,
        title: 'Omsk',
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: pos2,
        map: map,
        title: 'Novosibirsk',
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: pos3,
        map: map,
        title: 'Tomsk',
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: pos4,
        map: map,
        title: 'Krasnoyarsk',
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: pos5,
        map: map,
        title: 'Irkutsk',
        icon: image
    });
}











function initContactsMap() {
    var mapOptions = {
        zoom: 15,
        scrollwheel: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        center: new google.maps.LatLng(55.057270, 82.914003)
    }
    var map = new google.maps.Map(document.getElementById('contacts-map'),
        mapOptions);

    var image = 'images/map-ico.png';
    var myLatLng = new google.maps.LatLng(55.057270, 82.914003);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

function formValidation() {
    $('form').each(function(){
        var form=$(this),
            input 		= form.find('input.required'),
            input_email = form.find('input.email'),
            input_phone = form.find('input.phone'),
            textarea 	= form.find('textarea.required');

        input.blur(function(){
            if($(this).val().replace(/\s+/g,'')=="" || $(this).val()==this.defaultValue){
                $(this).closest('.input-wrap, .input-holder').addClass('has-error');
            }else{
                $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
            }
        }).focus(function(){
            $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
        });
        input_email.blur(function(){
            /*if(!(/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test($(this).val())){
                $(this).closest('.input-wrap, .input-holder').addClass('has-error');
            }else{
                $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
            }*/
        }).focus(function(){
            $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
        });
        input_phone.blur(function(){
            if(!(/^\+375\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/ig).test($(this).val())){
                $(this).closest('.input-wrap, .input-holder').addClass('has-error');
            }else{
                $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
            }
        }).focus(function(){
            $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
        });
        textarea.blur(function(){
            if($(this).val().replace(/\s+/g,'')=="" || $(this).val()==this.defaultValue){
                $(this).closest('.input-wrap, .input-holder').addClass('has-error');
            }else{
                $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
            }
        }).focus(function(){
            $(this).closest('.input-wrap, .input-holder').removeClass('has-error');
        })
        form.submit(function(e){
            input.trigger('blur');
            if(textarea.length){
                textarea.trigger('blur');
            }
            if(form.find('.has-error').length) e.preventDefault();
        });
    });

}

function accordion() {
    $('.js-accordion__opener').click(function(e){
        var item=$(this).closest('.js-accordion-item');
        if(item.hasClass('active')){
            item.find('.js-expanded').slideToggle(function(){
                item.toggleClass('active');
            });
        }else{
            item.parent().find('.js-accordion-item.active .js-expanded').slideToggle(function(){
                $(this).parent().toggleClass('active');
            });
            item.find('.js-expanded').slideToggle(function(){
                item.toggleClass('active');
            });
        }
        e.preventDefault();
    });
}

function getAnchorUrlToOrderId(order_id){
    var location = window.location;
    var anchor_url = '';
    var anchor = 'o_' + order_id;
    var hash_url = '';
    var prefix = '';
    //if(anchor == getAnchorFromUrl(location)){

    var rnd = Math.floor((Math.random()*100000000000)+1);
    hash_url = 'hash=' + rnd;
    /*
    if(location.href.indexOf('?')>0)
        prefix = '&';
    else
        prefix = '?';
    */

    anchor_url = anchor_url + prefix + hash_url
    //}

    anchor_url = anchor_url + '#' + anchor;
    return anchor_url;
}
