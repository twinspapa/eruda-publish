(function($){
    $(document).ready(function() {
        re_font_size('html');

        $(window).resize(function() {
            re_font_size('html');
        });

        $('#gnb .menu').click(function() {
            $(this).toggleClass('active');
            $('.pop-gnb').toggleClass('active');
        });

        $('#gnb .pop-gnb').click(function() {
            $('#gnb .menu').toggleClass('active');
            $(this).toggleClass('active');
        });

        $(window).scroll(function(e) {
          if ($(window).scrollTop() > 0) {
              $("body").addClass("body-scrolled");
          }
          else if ($(window).scrollTop() === 0){
              $("body").removeClass("body-scrolled");
          }
        });

        AOS.init({
            duration: 500,
        })
    });
})(jQuery);

function raito(objClass, raito) {
    var obj = $('.' + objClass),
        objWidth = obj.width(),
        objHeight = objWidth * raito;

    obj.css('height', objHeight + 'px')
}

function re_font_size(element) {
    var vw = $(window).width(),
        x = (1920 - vw) / 1.5,
        fs = ((1920 - x) / 1920) * 100;

        if (fs < 60) {
          fs = 60
        }

    $(element).css('font-size', fs + '%');
}
