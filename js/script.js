$(function () {
    $('.btn_burger').on('click', function () {
        $('.nav_menu').toggleClass('responsive');
    });

    $(".nav_menu li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top-20;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('.logo').on('click', function (e) {
          e.preventDefault();
        $('body, html').animate({'scrollTop': 0}, 800)
    });

    $('.img_list li a').on('click', function (e) {
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
        var ptext = $(this).siblings('.img_link').find('p').text();
        $('.imgBox .imgBox_title p').text(ptext);
       var h4text = $(this).siblings('.img_link').find('h4').text();
        $('.imgBox .imgBox_title h4').text(h4text);
        var ahref = $(this).siblings('.img_link').find('a').attr("href");
        $('.imgBox .imgBox_title .btn_go').attr("href", ahref);
    });

    $('.toggle-icon').on('click', function () {
        $('.nav_menu').slideToggle();
        $('.toggle-icon .fas').toggleClass('fa-times');
    });

    $('.btn_submit').on('click', function () {
        $('input:not(input.btn_submit), textarea').val("");
        alert("Ваше сообщение не отправлено!" +
            " Отправте сообщение через Telegram.");
    });

    $('input:not(input.btn_submit), textarea').on('focus', function () {
            $(this).attr("placeholder", "");
    });

    $(window).scroll(function () {
        if($(window).scrollTop() > 100){
            $('.btn_Up').addClass('active');
            $('.nav_top').addClass('fixed');
        }else {
            $('.btn_Up').removeClass('active');
            $('.nav_top').removeClass('fixed');
        }

        var st = $(window).scrollTop();
            $('.banner_img').css('transform', 'translate(0%, '+ st * 0.60 + 'px');

        $('header[id], .sec_content[id]').each(function () {
            var id = $(this).attr("id");
            if($(this).offset().top-200 < $(window).scrollTop()){
                $('.nav_menu li a[href="#'+id+'"]').parent().addClass('active').siblings().removeClass('active');

            }
        })
    });

});
