$(function () {
  var SERT_DATE = new Date(2019, 4, 22);

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

  // TIMER
  (function() {
    function getDateDiff(date1, date2) {
      var now = new Date;
      var date = SERT_DATE;

      function getDiff(value1, value2, max) {
        var result = {
          value: 0, inc: false
        };

        if (value1 <= value2) {
          result.value = value2 - value1;
        } else {
          result.value = max - value1 + value2;
          result.inc = true;
        }
        return result;
      }

      function getDaysInMonth(n, year) {
        var day31 = [0, 2, 4, 6, 7, 9, 10];
        var day30 = [3, 5, 8, 11];

        if (day31.indexOf(n) !== -1) return 31;
        if (day30.indexOf(n) !== -1) return 30;

        if (
          year % 4 === 0 &&
          year % 100 !== 0 ||
          year % 400 === 0
        ) return 29;

        return 28;
      }

      var ssNow = now.getUTCSeconds();
      var ssDate = date.getUTCSeconds();
      var ssDiff = getDiff(ssNow, ssDate, 60);
      var ss = ssDiff.value;

      var mmNow = now.getUTCMinutes();
      var mmDate = date.getUTCMinutes();
        - (ssDiff.inc ? 1 : 0);
      var mmDiff = getDiff(mmNow, mmDate, 60);
      var mm = mmDiff.value;

      var hhNow = now.getUTCHours();
      var hhDate = date.getUTCHours()
        - (mmDiff.inc ? 1 : 0);
      var hhDiff = getDiff(hhNow, hhDate, 24);
      var hh = hhDiff.value;

      var mnNow = now.getUTCMonth();

      var ddNow = now.getUTCDate();
      var ddDate = date.getUTCDate()
        - (hhDiff.inc ? 1 : 0);
      var ddDiff = getDiff(ddNow, ddDate, getDaysInMonth(mnNow, now.getUTCFullYear()));
      var dd = ddDiff.value;

      var mnDate = date.getUTCMonth()
        - (ddDiff.inc ? 1 : 0);
      var mnDiff = getDiff(mnNow, mnDate, 12);
      var mn = mnDiff.value;

      var units = [
        {
          value: ss.toString().padStart(2, '0'),
          name: 'seconds'
        },
        {
          value: mm.toString().padStart(2, '0'),
          name: 'minutes'
        },
        {
          value: hh.toString().padStart(2, '0'),
          name: 'hours'
        },
        {
          value: dd.toString().padStart(2, '0'),
          name: 'days'
        },
        {
          value: mn.toString().padStart(2, '0'),
          name: 'month'
        }
      ];
      
      var box = document.getElementById('timer');
      box.innerHTML = '';

      for (var i = units.length - 1; i >= 0; i--) {
        var cur = units[i];
        var span = document.createElement('span');
        span.innerText = cur.value;
        span.classList.add(cur.name);

        box.appendChild(span);
      }
    }

    getDateDiff();
    setInterval(getDateDiff, 1000);

  })();
});
