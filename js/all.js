(function($){
    $(document).ready(function() {
        re_font_size('html');

        $(window).resize(function() {
            re_font_size('html');
        });

        $('#gnb .menu').click(function() {
            $(this).toggleClass('active');
            $('.pop-gnb').toggleClass('active');
            $('body').toggleClass('popActive');
        });

        $('#gnb .pop-gnb').click(function() {
            $('#gnb .menu').toggleClass('active');
            $(this).toggleClass('active');
            $('body').toggleClass('popActive');
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
            duration: 1500,
        })

    });
    $("#formProposalDown").validator();

    // when the form is submitted
    $("#formProposalDown").on("submit", function(e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        // FOR CODEPEN DEMO I WILL PROVIDE THE DEMO OUTPUT HERE, download the PHP files from
        // https://bootstrapious.com/p/how-to-build-a-working-bootstrap-ad_contact

        var messageAlert = "alert-success";
        var messageText = "문의 등록이 완료 되었습니다.";

        // let's compose Bootstrap alert box HTML
        var alertBox =
          '<div class="alert ' +
          messageAlert +
          ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
          messageText +
          "</div>";

        // If we have messageAlert and messageText
        if (messageAlert && messageText) {
          // inject the alert to .messages div in our form
          $("#ad_contact").find(".messages").html(alertBox);
          // empty the form
          $("#ad_contact")[0].reset();
        }

        return false;
      }
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
