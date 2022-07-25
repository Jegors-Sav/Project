$(document).ready(function(){
    $(".carousel_inner").slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
        '<button type="button" class="slick-prev"><img src="./img/icon/left.png"></button>',
    nextArrow:
        '<button type="button" class="slick-next"><img src="./img/icon/right.png"></button>',
    responsive:[
        {
        breakpoint: 992,
        settings: {
            dots: true,
            arrows:false
            }
        }
    ]
    });

    $("ul.catalog_tabs").on("click", "li:not(.catalog_tab_active)", function () {
        $(this)
        .addClass("catalog_tab_active")
        .siblings()
        .removeClass("catalog_tab_active")
        .closest("div.container")
        .find("div.catalog_content")
        .removeClass("catalog_content_active")
        .eq($(this).index())
        .addClass("catalog_content_active");
    });

    $('.catalog-item_link').each(function(i){
        $(this).on('click',function(e){
            e.preventDefault();
            $(".catalog-item_content").eq(i).toggleClass('catalog-item_content_active').eq(i);
            $(".catalog-item_list").eq(i).toggleClass("catalog-item_list_active");
        })
    })

    $(".catalog-item_back").each(function (i) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(".catalog-item_content").eq(i).toggleClass("catalog-item_content_active").eq(i);
            $(".catalog-item_list").eq(i).toggleClass("catalog-item_list_active");
        });
    });

    // Modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });

    $(".button_mini").each(function(i){
        $(this).on('click',function(){
            $('#order .modal_desc').text($('.catalog-item_subtitle').eq(i).text())
            $(".overlay, #order").fadeIn("slow");
        })
    });


    function validateForms (form){
        $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            phone: "required",
            email: {
                required: true,
                email: true,
            },
            messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!"),
            },
            phone: "Пожалуйста, введите свою почту",
            email: {
                required: "Неправильно введен адрес почты",
                email: "Неправильно введен адрес почты",
                },
            },
            },
        });
    };

    validateForms('#consultation-form');
    validateForms("#consultation form");
    validateForms("#order form");

    // Smooth scroll and pageup
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }
        else{
            $(".pageup").fadeOut();
        }
    });

    $("a[href^=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});